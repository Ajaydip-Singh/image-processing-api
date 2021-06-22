import fs from "fs";

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
