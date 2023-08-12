export interface IExperienceCardProps {
  job_title: string;
  company: string;
  start_date: string;
  end_date: string | undefined;
  description: string;
}

const ExperienceElement: React.FC<IExperienceCardProps> = ({
  job_title,
  company,
  description,
  end_date,
  start_date,
}) => {
  return (
    <>
      <div className="border-2 max-w-md">
        <div>{job_title}</div>
        <div>{company}</div>
        <div>{description}</div>
        <div>
          {start_date} -{" "}
          {end_date && end_date?.length > 0 ? end_date : "present"}
        </div>
      </div>
    </>
  );
};

export default ExperienceElement;
