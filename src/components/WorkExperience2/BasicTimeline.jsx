import * as React from "react";
// import { Timeline } from "@mui/lab/Timeline";
import {
  TimelineConnector,
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineDot from "@mui/lab/TimelineDot";
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "../WorkExperience/ExperienceCard/ExperienceCard";

export default function BasicTimeline() {
  return (
    <section id="work-exp" className="experience-container">
      <h5>Work Experience</h5>

      <div className="experience-content"></div>
      <Timeline position="alternate">
        {WORK_EXPERIENCE.map((item) => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <ExperienceCard key={item.title} details={item} />
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}
