import fs from "fs";

/* 
Asynchronously check if a file exists
*/
export const existsFile = async (filePath: fs.PathLike): Promise<boolean> => {
  try {
    fs.promises.access(filePath, fs.constants.F_OK);
    return true
  } catch (error) {
    console.log(error);
    return false
  }
};

/* 
Asynchronously delete a file
*/
export const deleteFile = async (filePath: fs.PathLike): Promise<void> => {
  try {
    await fs.promises.unlink(filePath);
  } catch (error) {
    console.error();
  }
};
