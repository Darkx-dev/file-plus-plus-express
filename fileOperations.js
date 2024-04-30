import { readdirSync, writeFileSync, unlinkSync, statSync, readFileSync } from "fs";

export const createFile = (file_name, file_content) => {
  writeFileSync(`./files/${file_name}`, file_content);
};

export const readFile  = (__path, fileName) => {
    return readFileSync(`${__path}/${fileName}`, "utf-8");
}

export const filesInDirectory = (__path) => {
  return readdirSync(__path);
};

export const fileStats = (__path, filesArray) => {
  let allStats = Array();
  filesArray.forEach((file, index) => {
    let stats = statSync(`${__path}/${file}`);
    allStats.push(stats);
  });
  return allStats;
};

export const deleteFile = (__path, fileName) => {
  unlinkSync(`${__path}/${fileName}`);
};
