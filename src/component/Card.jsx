export const Card = ({ icon, image ,title, subtitle }) => {
  return (
    <div>
      <div className="border-2 border-slate-400 p-4">
        <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain"
        />

        <div className="text-5xl mb-4">{icon}</div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        
        <p className="text-slate-600">{subtitle}</p>
      
      </div>
    </div>
  );
};

export default Card;