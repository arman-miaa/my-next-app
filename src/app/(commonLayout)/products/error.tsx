"use client"

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  console.log(error, reset);
  return (
    <div className="flex justify-center flex-col w-fit mx-auto">
      <p className="text-center text-red-700 text-2xl">Someting sent wrong</p>
      <p className="text-center text-red-700 text-2xl">{error?.message}</p>
      <button
        onClick={() => reset()}
        className="bg-blue-600 cursor-pointer text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition"
      >
        Try Againg
      </button>
    </div>
  );
};

export default ErrorPage;