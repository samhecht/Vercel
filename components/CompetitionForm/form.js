import {
    Form,
    Button,
    Upload,
    Input,
    Row,
    Col,
    message,
  } from 'antd';
  import { InboxOutlined } from '@ant-design/icons';
  import React from 'react';
  
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
  
    const onFinish = (values) => {
    //   console.log('Received values of form: ', values);
    //   let form_data = new FormData();
  
    //   form_data.append('artist_name', values["username"]);
    //   form_data.append('twitter_handle', values["twitter-handle"]);
    //   form_data.append('art_title', values['art-title']);
    //   form_data.append('inspiration', values['art-inspiration']);
  
      
    //   if (!values['dragger'])
    //   {
    //     message.error("Please attach the art file as a jpg or png");
    //     return;
    //   }
    //   else
    //   {
    //     form_data.append('user_file', values['dragger'][0].originFileObj, values['dragger'][0].name);
    //   }
  
  
    //   message.info("Posting submission data...");
  
    //   axios({
    //     method: "post",
    //     url: endpoint,
    //     data: form_data,
    //     headers: { "Content-Type": "multipart/form-data" },
    //   })
    //   .then(function (response) {
    //     //handle success
    //     console.log("Post request succeeded: ", response);
    //     message.info("Success! Your art has been submitted.");
    //     form.resetFields();
    //   })
    //   .catch(function (response) {
    //     //handle error
    //     console.log("Post request failed: ", response);
    //     message.error("Submission failed. Make sure to fill out the entire form.");
    //   });
    };
  
    return (
      <section
        style={{
            paddingTop: "100px"
        }}
      >
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
          {/* <div className="text4" style={{ paddingLeft: 10, marginBottom: 50 }}>
            <div className="text" style={{ width: 300, height: 350 }}>
              <h1
                style={{
                  color: "white",
                  textAlign: "left",
                  marginBottom: 10,
                }}
              >
                Submit for Competition
              </h1>
              <h4 style={{ color: "black", marginTop: 50, textAlign: "left" }}>
                Required: a watermarked artwork file (.jpg or .png) under 10mb and
                a Retweet.
              </h4>
            </div>
          </div> */}
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
                    Art Inspiration
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