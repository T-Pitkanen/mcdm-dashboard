import DevDebugJson from "../devDebugJson/devBugJson";

const DevImageMeta = ({ meta }) => {
    
const tenMeta = {
    make: meta.image.Make,
    model: meta.image.Model,
    lensModel: meta.exif.LensModel,
    software: meta.image.Software,
    exposureTime: meta.exif.ExposureTime,
    fNumber: meta.exif.FNumber,
    iso: meta.exif.ISO,
    flash: meta.exif.Flash,
    createDate: meta.exif.CreateDate,
    modifyDate: meta.image.ModifyDate,
  };

  return (
    <>
      <DevDebugJson content={tenMeta}></DevDebugJson>
    </>
  );
};

export default DevImageMeta;
