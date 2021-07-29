
export const validateFile = (file: any) => {
    if (file) {
        const availableFileExt = ["doc", "pdf", "docx", "odt", "xls", "xlsx", "ods", "txt", "jpg", "png", "jpeg"];
        const fileExtension = file && file.name?.split(".").pop();
        return availableFileExt.includes(fileExtension);
    } else return false;
}

