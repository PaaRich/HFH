import ContentLoader from "react-content-loader";

const ImageGrid = (props) => (
  <ContentLoader
    width={1060} // Adjusted to account for 3 items + 20px gaps (340 * 3 + 20 * 2)
    height={192} // Matches the height of the items
    viewBox="0 0 1060 192"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* Placeholder for first item */}
    <rect x="0" y="0" rx="5" ry="5" width="340" height="192" />
    {/* Placeholder for second item */}
    <rect x="360" y="0" rx="5" ry="5" width="340" height="192" />
    {/* Placeholder for third item */}
    <rect x="720" y="0" rx="5" ry="5" width="340" height="192" />
  </ContentLoader>
);

ImageGrid.metadata = {
  name: "Hassan Tijani.A",
  github: "surepeps",
  description: "Image Grid with Spaced Items",
  filename: "ImageGrid",
};

export default ImageGrid;
