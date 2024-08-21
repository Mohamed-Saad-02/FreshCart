import GoBack from "../GoBack/GoBack";

function NoProduct({ message }) {
  return (
    <div className="h-full max-w-[50%] flex items-center justify-center mx-auto">
      <div className="flex items-center justify-center gap-3 max-md:flex-wrap">
        <p className="bg-main-color opacity-80 text-center text-white px-4 py-2 md:flex-1 rounded max-md:w-full">
          {message}
        </p>
        <GoBack />
      </div>
    </div>
  );
}

export default NoProduct;
