function TailwindView({ title, text }) {
    return (
        <div className="flex justify-center mt-10">
            {/* card მსგავსი layout */}
            <div className="bg-white p-6 rounded-xl shadow-md w-80">
                <h2 className="text-xl font-bold mb-3 text-gray-800">
                    {title}
                </h2>
                <p className="text-gray-600">
                    {text}
                </p>
            </div>
        </div>
    );
}

export default TailwindView;
