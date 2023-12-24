function BlurLayer({ focused }) {
  console.log(focused);
  return (
    <div
      className={`${
        focused ? "opacity-0" : "opacity-100 backdrop-blur"
      } absolute inset-0 flex justify-center items-center transition-all duration-500 `}
    >
      <span className="font-mono text-lg text-center text-slate-100">
        Focus Here to Start
      </span>
    </div>
  );
}

export default BlurLayer;
