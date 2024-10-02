function ServiceDescription({ Service }) {
  return (
    <div>
      <h3 className="font-bold text-2xl py-4">About This Gig</h3>
      <p className="text-sm font-semibold">{Service.description}</p>
    </div>
  );
}
export default ServiceDescription;
