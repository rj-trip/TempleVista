import { Link } from "react-router-dom";

const TempleCard = ({ temple }) => {
  return (
    <Link to={`/temple/${temple.id}`} className="group">
      <div className="rounded-2xl overflow-hidden shadow-lg transition-transform group-hover:scale-105 bg-white">
        <img
          src={temple.image}
          alt={temple.name}
          className="h-56 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-elegant text-saffron">{temple.name}</h3>
          <p className="text-sm text-slate-600">{temple.location}</p>
          <p className="text-sm text-slate-700 font-semibold">{temple.deity}</p>
        </div>
      </div>
    </Link>
  );
};

export default TempleCard;
