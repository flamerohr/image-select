import { useImageFacesQuery } from "features/apiSliceMock";
import { Face } from "./Face";

export const Faces = ({ imageId }) => {
  const { data: faces, isLoading } = useImageFacesQuery(imageId);

  if (isLoading) {
    return null;
  }

  return (
    <>
      {faces.map((face) => (
        <Face {...face} />
      ))}
    </>
  );
};

export default Faces;
