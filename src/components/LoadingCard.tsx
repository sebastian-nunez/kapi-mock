const LoadingCard: React.FC = () => {
  return (
    <div className="card card-side border shadow-md h-48 w-full flex items-center">
      <div className="card-body">
        <span className="loading loading-dots loading-lg mx-auto" />
      </div>
    </div>
  )
}

export default LoadingCard
