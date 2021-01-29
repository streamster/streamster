import fs from 'fs';
const GenerateSchema = require('generate-schema');

export default (name: string, path: string, data: any) => {
  const schema = JSON.stringify(GenerateSchema.json(name, data));
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
    fs.writeFileSync(path, schema);
    console.log(`success: ${name} schema generated!`);
  } catch (err) {
    console.error(`error: Error generating the ${name} schema. ${err}`);
  }
};
