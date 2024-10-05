import React from 'react'

interface FeatureItemProps {
  icon: string;
  title: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({icon, title}) => {
  return (
    <div className='w-full border-b-2'>
      <div className="flex items-center my-6 ml-8">
        <img src={icon} alt={title} />
        <p className="ml-2.5 font-bold text-2xl">{title}</p>
      </div>

    </div>
  )
}

export default FeatureItem