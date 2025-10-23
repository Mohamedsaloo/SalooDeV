import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import useShop from "../../Hooks/useShop";

export default function ProductPage() {
  const { id } = useParams();
  const { products, loading } = useShop();
  const product = products?.find((p) => p.id === id);

  if (loading)
    return (
      <div className="pt-32 text-center text-gray-600 text-lg animate-pulse">
        جار التحميل...
      </div>
    );

  if (!product)
    return (
      <div className="pt-32 text-center text-red-500 text-lg">
        المنتج غير موجود 😢
        <div className="mt-4">
          <Link
            to="/shop"
            className="text-blue-500 underline hover:text-blue-700 transition"
          >
            العودة إلى المتجر
          </Link>
        </div>
      </div>
    );

  return (
    <div className="pt-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <Link
        to="/shop"
        className="flex items-center gap-1 text-gray-700 hover:text-black transition mb-6"
      >
        <ArrowLeft size={18} />
        <span>رجوع</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex flex-col md:flex-row gap-10 p-6 sm:p-10 rounded-3xl
          backdrop-blur-xl bg-white/10 border border-white/20 
          shadow-[0_4px_30px_rgba(0,0,0,0.1)] overflow-hidden
          before:absolute before:inset-0 before:rounded-3xl
          before:bg-gradient-to-tr before:from-white/20 before:to-transparent 
          before:opacity-40 before:-z-10
          after:absolute after:top-[-50%] after:left-[-50%]
          after:w-[200%] after:h-[200%]
          after:bg-[radial-gradient(circle,rgba(255,255,255,0.25),transparent_70%)]
          after:-z-10"
      >
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded-2xl object-cover shadow-lg border border-white/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />

        <div className="flex-1 flex flex-col justify-between text-black relative z-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              {product.name}
            </h1>
            <p className="text-gray-800 leading-relaxed mb-6">
              {product.description}
            </p>
          </div>

          <div>
            <span className="text-2xl font-semibold text-green-700">
              {product.price} جنيه
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full mt-6 py-3 rounded-xl font-semibold
              text-white bg-gradient-to-tr from-green-500 to-green-600
              shadow-[0_4px_20px_rgba(0,0,0,0.1)]
              hover:from-green-400 hover:to-green-500
              border border-white/30 backdrop-blur-md
              transition-all duration-300"
            >
              أضف إلى السلة
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
