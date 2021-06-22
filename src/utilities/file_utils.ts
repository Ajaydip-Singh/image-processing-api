import fs from "fs";

/* 
Asynchronously check if a file exists
*/
export const existsFile = async (filePath: fs.PathLike): Promise<void> => {
  try {
    fs.promises.access(filePath, fs.constants.F_OK);
  } catch (error) {
    console.log(error);
  }
};

/* 
Asynchronously rename/move file
*/
export const renameFile = async (
  oldFilePath: fs.PathLike,
  newFilePath: fs.PathLike
): Promise<void> => {
  try {
    await fs.promises.rename(oldFilePath, newFilePath);
  } catch (error) {
    console.error();
  }
};
