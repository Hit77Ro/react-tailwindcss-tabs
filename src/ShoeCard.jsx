export default function ShoeCard({ imgUrl, setCurrentImg, BigShoeImgState }) {
  const handleClick = () => {
    if (BigShoeImgState !== imgUrl.bigShoe) {
      setCurrentImg(imgUrl.bigShoe);
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer border px-3 py-5 rounded-xl  ${
        BigShoeImgState === imgUrl.bigShoe
          ? "border-coral-red bg-sky-100"
          : "border-transparent bg-sky-50"
      }  `}
    >
      <img
        height={120}
        width={102}
        src={imgUrl.thumbnail}
        alt="shoe collection"
        className="pointer-events-none select-none"
      />
    </div>
  );
}
