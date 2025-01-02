import useIntersectionObserver from "../services/useIntersectionObserver";
import { useContext, useRef } from "react";
import { Context } from "../Context/Context";

const Policy = () => {
  const policyRef = useRef(null);
  const { setPolicy } = useContext(Context);
  const isOnView = useIntersectionObserver(policyRef, { threshold: 0.5 });
  isOnView && setPolicy(false);
  return <div ref={policyRef}>Policy</div>;
};

export default Policy;
