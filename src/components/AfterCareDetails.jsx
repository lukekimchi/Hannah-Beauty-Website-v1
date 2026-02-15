import PreCareCard from "./cards/PreCareCard";
import AfterCareCard from "./cards/AfterCareCard";

const AfterCareDetails = ({ aftercare }) => {
  return (
    <div className="flex flex-col w-full">
      <PreCareCard 
        title={aftercare.precare.title}
        sections={aftercare.precare.sections}
      />
      <AfterCareCard 
        title={aftercare.aftercare.title}
        sections={aftercare.aftercare.sections}
      />
    </div>
  );
};

export default AfterCareDetails;
