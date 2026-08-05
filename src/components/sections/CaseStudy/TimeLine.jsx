import { useEffect, useState } from "react";

export function TimeLine({ contentRef, firstTitleRef, lastTitleRef }) {
  const [timelineStyle, setTimelineStyle] = useState({});

  useEffect(() => {
    function updateTimeline() {
      const content = contentRef.current;
      const firstTitle = firstTitleRef.current;
      const lastTitle = lastTitleRef.current;

      if (!content || !firstTitle || !lastTitle) return;

      const contentPosition = content.getBoundingClientRect();

      const firstPosition = firstTitle.getBoundingClientRect();
      const lastPosition = lastTitle.getBoundingClientRect();

      const firstPointY =
        firstPosition.top + firstPosition.height / 2 - contentPosition.top;

      const lastPointY =
        lastPosition.top + lastPosition.height / 2 - contentPosition.top;

      const timelineHeight = lastPointY - firstPointY;

      const timelineLeft = firstPosition.left - contentPosition.left - 16;

      setTimelineStyle({
        top: `${firstPointY}px`,
        height: `${timelineHeight}px`,
        left: `${timelineLeft}px`,
      });
    }

    updateTimeline();

    window.addEventListener("resize", updateTimeline);

    return () => {
      window.removeEventListener("resize", updateTimeline);
    };
  }, [contentRef, firstTitleRef, lastTitleRef]);

  return <div className="case-study__timeline" style={timelineStyle} />;
}
