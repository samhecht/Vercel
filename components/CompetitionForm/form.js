import {
    Form,
    Button,
    Upload,
    Input,
    Row,
    Col,
    message,
    Checkbox,
  } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import fbApp from '../../firebase/firebaseClient.ts';
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import LoginPopupPrompt from '../Authentication/LoginPopupPrompt';

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const MyForm = () => {

  const [form] = Form.useForm();
  const [currUserId, setCurrUserId] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    // Handle authentication
    const auth = getAuth(fbApp);
    let unsub_auth = onAuthStateChanged(auth, async (user) => {
      console.log("auth state changed", user);
      if (user) {
        const uid = user.uid;
        setCurrUserId(uid);
      } else {
        setCurrUserId("");
      }
    });

    return () => {
      unsub_auth();
    };
  });

  const onFinish = (values) => {
    if (currUserId === "") {
      console.log("not logged in");
      setShowLoginModal(true);
      return;
    }

    let form_data = new FormData();

    const artistName = values["username"];
    const twitterHandle = values["twitter-handle"];
    const artTitle = values["art-title"];
    const inspiration = values["art-inspiration"];
    const description = values["art-description"];
    const date = Date.now();
    const likes = 0;
    const popularity = 0;

    let category = "";

    values['art-category'].forEach(cat => {
      // Store categories with a ';' delimiter
      category += `;${cat}`;
    });

    if (!values['dragger'])
    {
      message.error("Please attach the art file as a jpg or png");
      return;
    }
    else
    {
      if (values['dragger'].length > 0)
      {
        if (!values['dragger'])
        {
          message.error("Please attach the art file as a jpg or png");
          return;
        }
        else
        {
          form_data.append('file', values['dragger'][0].originFileObj, twitterHandle + "/" + values['dragger'][0].name);
        }

        message.info("Posting submission data...");
    
        axios({
          method: "post",
          url: "/api/uploadImage",
          data: form_data,
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(async function (response) {
          //handle success
          console.log("Post request succeeded: ", response);
          message.info("Success! Your art has been submitted.");

          try {
            const db = getFirestore(fbApp);

            await addDoc(collection(db, "Artwork"), {
              artistId: currUserId,
              twitterHandle: twitterHandle,
              likes: likes,
              publicUrl: response.data.name,
              artTitle: artTitle,
              artistName: artistName,
              inspiration: inspiration,
              description: description,
              category: category,
              date: date,
              popularity: popularity,
            });
          } catch (e) {
            console.log("Couldn't create artwork submission: ", e);
          }

          form.resetFields();
        })
        .catch(function (response) {
          //handle error
          console.log("Post request failed: ", response);
          message.error("Submission failed. Make sure to fill out the entire form.");
        });
      }
    }

    console.log('Received values of form: ', values);
  };

  return (
    <section
      style={{
          paddingTop: "100px"
      }}
    >
      <LoginPopupPrompt visibleProp={showLoginModal} setShowLoginModal={setShowLoginModal} />
      <Row
          style={{
              marginTop: 500,
              maxWidth: 1000,
              marginBottom: 100,
              margin: "auto",
              alignItems: "center",
              justifyContent: "center",
          }}
      >
        <h1 style={{color: "white"}}>Submit for Competition</h1>
      </Row>
      <Row
        style={{
          marginTop: 300,
          maxWidth: 1000,
          marginBottom: 100,
          margin: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col span={24}>
          <Form
            form={form}
            name="validate_other"
            {...formItemLayout}
            onFinish={onFinish}
            initialValues={{
              username: "J. Doe",
              "twitter-handle": "@jdoe",
              "art-title": "Artwork Title",
              "art-inspiration": "Artwork Inspiration",
            }}
          >
            <Form.Item
              {...formItemLayout}
              name="username"
              label={
                <label
                  style={{
                    color: "white",
                    fontSize: "14",
                    fontFamily: "sans-serif",
                  }}
                >
                  Artist Name
                </label>
              }
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input placeholder="Please input your name" />
            </Form.Item>

            <Form.Item
              {...formItemLayout}
              name="twitter-handle"
              label={
                <label
                  style={{
                    color: "white",
                    fontSize: "14",
                    fontFamily: "sans-serif",
                  }}
                >
                  Twitter
                </label>
              }
              rules={[
                {
                  required: true,
                  message: "Please input your Twitter handle",
                },
              ]}
            >
              <Input placeholder="Twitter Handle..." />
            </Form.Item>

            <Form.Item
              {...formItemLayout}
              name="art-title"
              label={
                <label
                  style={{
                    color: "white",
                    fontSize: "14",
                    fontFamily: "sans-serif",
                  }}
                >
                  Art Title
                </label>
              }
              rules={[
                {
                  required: true,
                  message: "Please input the title of your art",
                },
              ]}
            >
              <Input placeholder="Title..." />
            </Form.Item>

            <Form.Item
              {...formItemLayout}
              name="art-inspiration"
              label={
                <label
                  style={{
                    color: "white",
                    fontSize: "14",
                    fontFamily: "sans-serif",
                  }}
                >
                  Inspiration
                </label>
              }
              rules={[
                {
                  required: true,
                  message: "Please input the inspiration for your art",
                },
              ]}
            >
              <Input placeholder="Inspiration..." style={{ height: 100 }} />
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              name="art-description"
              label={
                <label
                  style={{
                    color: "white",
                    fontSize: "14",
                    fontFamily: "sans-serif",
                  }}
                >
                  Description
                </label>
              }
              rules={[
                {
                  required: true,
                  message: "Please input the description of your art",
                },
              ]}
            >
              <Input placeholder="Description..." style={{ height: 100 }} />
            </Form.Item>


            <Form.Item 
              name="art-category" 
              label={
                <label
                  style={{
                    color: "white",
                    fontSize: "14",
                    fontFamily: "sans-serif",
                  }}
                >
                  Category
                </label>
              } 
              style={{ color: "white" }}
            >
              <Checkbox.Group>
                <Row>
                  <Col span={8}>
                    <Checkbox value="abstract" 
                      style={{ lineHeight: '32px', color: "white" }}
                    >
                      Abstract
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="generative" style={{ lineHeight: '32px', color: "white" }}>
                      Generative
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="3d" style={{ lineHeight: '32px', color: "white" }}>
                      3d
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="stylized" style={{ lineHeight: '32px', color: "white" }}>
                      Styllized
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="derivative" style={{ lineHeight: '32px', color: "white" }}>
                      Derivative
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="humour" style={{ lineHeight: '32px', color: "white" }}>
                      Humour
                    </Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Form.Item>



            <Form.Item label="Dragger">
              <Form.Item
                name="dragger"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                label={
                  <label
                    style={{
                      color: "white",
                      fontSize: "14",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Upload File
                  </label>
                }
                noStyle
              >
                <Upload.Dragger name="files">
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload.
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 6,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginLeft: 20 }}
              >
                Retweet
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </section>
  );
};
export default MyForm;