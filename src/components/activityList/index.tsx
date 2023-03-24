import { useNavigate } from "react-router-dom";
import { route } from "../../routes";
import { Activity } from "../../types";
import { Button, ActivityContainer } from "./styles";

type Props = {
  activities: Array<Activity>;
};

const ActivityList: React.FC<Props> = ({ activities }) => {
  const navigate = useNavigate();

  const goToActivity = () => {
    navigate(route.question);
  };

  return (
    <section>
      <ActivityContainer className="container">
        {activities.map((item) => (
          <Button key={item.activity_name} onClick={goToActivity}>
            {item.activity_name}
          </Button>
        ))}
      </ActivityContainer>
    </section>
  );
};

export default ActivityList;
