// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Storage } from '@google-cloud/storage';
import middleware from '../../middleware/middleware';
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.use(middleware);


handler.post(async(req, res) => {
  const { client_email, private_key, project_id } = JSON.parse(
    Buffer.from(process.env.GCLOUD_CREDENTIALS, 'base64').toString()
  );
  
  const storage = new Storage({
    projectId: project_id,
    credentials: {
      client_email: client_email,
      private_key: private_key,
    }
  });
  
  const bucket = storage.bucket("evo-test-bucket");
  console.log(req.files['file']);
	console.log(req.files['file'].path);
  bucket.upload(req.files['file'].path, {
    destination: req.files['file'].name,
  }, function(err, file, apiResponse) {
    console.log(err);
    console.log(file.publicUrl());

    res.status(200).json({
      name: file.publicUrl(),
    });
  });

});

// first we need to disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
