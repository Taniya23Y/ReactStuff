import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    // Logic
    if (likedCourses.includes(props.course.id)) {
      // pehle se liked
      setLikedCourses((prev) => prev.filter((cid) => cid !== props.course.id));
      toast.warning("Liked Removed");
    } else {
      // pehle se like nahi hai course
      // insert karne h y course like course me
      if (likedCourses.length === 0) {
        setLikedCourses([props.course.id]);
      } else {
        setLikedCourses((prev) => [...prev, props.course.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="w-[300px]  bg-slate-500 bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt="images" />

        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center ">
          <button onClick={clickHandler}>
            {!likedCourses.includes(course.id) ? (
              <FcLikePlaceholder fontSize="1.75rem" />
            ) : (
              <FcLike fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
          {" "}
          {props.course.description.length > 100
            ? props.course.description.substring(0, 100) + "..."
            : props.course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
