import { useState } from "react";

function ExpendableText(props: any) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      {props.limit && !isExpanded
        ? props.children.substring(0, props.limit)
        : props.children}
      {props.limit >= props.children.length ? null : (
        <button
          className="btn btn-primary"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "collapse" : "Expand"}
        </button>
      )}
    </div>
  );
}

export default ExpendableText;
