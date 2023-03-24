import { Activity } from "../../types";
import { Button, ActivityContainer } from "./styles";

type Props = {
  activities: Array<Activity>;
  goToActivity: (item: Activity) => void;
};

const ActivityList: React.FC<Props> = ({ activities, goToActivity }) => {
  return (
    <ActivityContainer className="container">
      {activities.map((item) => (
        <Button key={item.activity_name} onClick={() => goToActivity(item)}>
          {item.activity_name}
        </Button>
      ))}
    </ActivityContainer>
  );
};

export default ActivityList;
