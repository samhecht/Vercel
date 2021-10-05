import { Storage } from '@google-cloud/storage';

export default async function handler(req, res) {
    const storage = new Storage({keyFilename: "protean-keyword-326516-89bdde152843.json"});
    const [files] = await storage.bucket("evo-test-bucket").getFiles();
    console.log('Files:');
    let file_urls = files.map(file => {
      console.log(file.publicUrl());
      return file.publicUrl();
    });
    res.status(200).json({ files: file_urls })
};