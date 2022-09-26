export const Image = ({ filename, url, ...props }) => {
  if (!filename || !url) {
    return "No image found";
  }

  return <img {...props} src={url} alt={filename} />;
};

export default Image;
