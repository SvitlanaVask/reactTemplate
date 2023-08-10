import { PageTitle  } from "components/PageTitle/PageTitle";
import { EventsBoard  } from "components/EventsBoard/EventsBoard";
import upcomingEvents from "upcoming-events.json"

export const App = () => {
  return (
    <>
      <PageTitle text="International Conference of Young Mathematicians"/>
      <EventsBoard events={upcomingEvents}/>
    </>
  );
};
