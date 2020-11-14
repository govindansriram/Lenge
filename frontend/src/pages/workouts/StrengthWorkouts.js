import React, { useEffect, useState } from "react";
import NavBar from "../../components/navbar/navbar";

import "./StrengthWorkouts.css";

import strength from "./strength.JPG";
import WorkoutCard from "./WorkoutCard";

export default function StrengthWorkouts() {
  const [workout5Ex1, setWorkout5Ex1] = useState([]);
  const [workout5Ex1Reps, setWorkout5Ex1Reps] = useState([]);
  const [workout5Ex1RestTime, setWorkout5Ex1RestTime] = useState([]);
  const [workout5Ex1Sets, setWorkout5Ex1Sets] = useState([]);
  const [workout5Ex1Weight, setWorkout5Ex1Weight] = useState([]);

  const [workout5Ex2, setWorkout5Ex2] = useState([]);
  const [workout5Ex2Reps, setWorkout5Ex2Reps] = useState([]);
  const [workout5Ex2RestTime, setWorkout5Ex2RestTime] = useState([]);
  const [workout5Ex2Sets, setWorkout5Ex2Sets] = useState([]);
  const [workout5Ex2Weight, setWorkout5Ex2Weight] = useState([]);

  const [workout5Ex3, setWorkout5Ex3] = useState([]);
  const [workout5Ex3Reps, setWorkout5Ex3Reps] = useState([]);
  const [workout5Ex3RestTime, setWorkout5Ex3RestTime] = useState([]);
  const [workout5Ex3Sets, setWorkout5Ex3Sets] = useState([]);
  const [workout5Ex3Weight, setWorkout5Ex3Weight] = useState([]);

  const [workout4Ex1, setWorkout4Ex1] = useState([]);
  const [workout4Ex1Reps, setWorkout4Ex1Reps] = useState([]);
  const [workout4Ex1RestTime, setWorkout4Ex1RestTime] = useState([]);
  const [workout4Ex1Sets, setWorkout4Ex1Sets] = useState([]);
  const [workout4Ex1Weight, setWorkout4Ex1Weight] = useState([]);

  const [workout4Ex2, setWorkout4Ex2] = useState([]);
  const [workout4Ex2Reps, setWorkout4Ex2Reps] = useState([]);
  const [workout4Ex2RestTime, setWorkout4Ex2RestTime] = useState([]);
  const [workout4Ex2Sets, setWorkout4Ex2Sets] = useState([]);
  const [workout4Ex2Weight, setWorkout4Ex2Weight] = useState([]);

  const [workout4Ex3, setWorkout4Ex3] = useState([]);
  const [workout4Ex3Reps, setWorkout4Ex3Reps] = useState([]);
  const [workout4Ex3RestTime, setWorkout4Ex3RestTime] = useState([]);
  const [workout4Ex3Sets, setWorkout4Ex3Sets] = useState([]);
  const [workout4Ex3Weight, setWorkout4Ex3Weight] = useState([]);

  const [workout3Ex1, setWorkout3Ex1] = useState([]);
  const [workout3Ex1Reps, setWorkout3Ex1Reps] = useState([]);
  const [workout3Ex1RestTime, setWorkout3Ex1RestTime] = useState([]);
  const [workout3Ex1Sets, setWorkout3Ex1Sets] = useState([]);
  const [workout3Ex1Weight, setWorkout3Ex1Weight] = useState([]);

  const [workout3Ex2, setWorkout3Ex2] = useState([]);
  const [workout3Ex2Reps, setWorkout3Ex2Reps] = useState([]);
  const [workout3Ex2RestTime, setWorkout3Ex2RestTime] = useState([]);
  const [workout3Ex2Sets, setWorkout3Ex2Sets] = useState([]);
  const [workout3Ex2Weight, setWorkout3Ex2Weight] = useState([]);

  const [workout3Ex3, setWorkout3Ex3] = useState([]);
  const [workout3Ex3Reps, setWorkout3Ex3Reps] = useState([]);
  const [workout3Ex3RestTime, setWorkout3Ex3RestTime] = useState([]);
  const [workout3Ex3Sets, setWorkout3Ex3Sets] = useState([]);
  const [workout3Ex3Weight, setWorkout3Ex3Weight] = useState([]);

  const [workout2Ex1, setWorkout2Ex1] = useState([]);
  const [workout2Ex1Reps, setWorkout2Ex1Reps] = useState([]);
  const [workout2Ex1RestTime, setWorkout2Ex1RestTime] = useState([]);
  const [workout2Ex1Sets, setWorkout2Ex1Sets] = useState([]);
  const [workout2Ex1Weight, setWorkout2Ex1Weight] = useState([]);

  const [workout2Ex2, setWorkout2Ex2] = useState([]);
  const [workout2Ex2Reps, setWorkout2Ex2Reps] = useState([]);
  const [workout2Ex2RestTime, setWorkout2Ex2RestTime] = useState([]);
  const [workout2Ex2Sets, setWorkout2Ex2Sets] = useState([]);
  const [workout2Ex2Weight, setWorkout2Ex2Weight] = useState([]);

  const [workout2Ex3, setWorkout2Ex3] = useState([]);
  const [workout2Ex3Reps, setWorkout2Ex3Reps] = useState([]);
  const [workout2Ex3RestTime, setWorkout2Ex3RestTime] = useState([]);
  const [workout2Ex3Sets, setWorkout2Ex3Sets] = useState([]);
  const [workout2Ex3Weight, setWorkout2Ex3Weight] = useState([]);

  const [workout1Ex1, setWorkout1Ex1] = useState([]);
  const [workout1Ex1Reps, setWorkout1Ex1Reps] = useState([]);
  const [workout1Ex1RestTime, setWorkout1Ex1RestTime] = useState([]);
  const [workout1Ex1Sets, setWorkout1Ex1Sets] = useState([]);
  const [workout1Ex1Weight, setWorkout1Ex1Weight] = useState([]);

  const [workout1Ex2, setWorkout1Ex2] = useState([]);
  const [workout1Ex2Reps, setWorkout1Ex2Reps] = useState([]);
  const [workout1Ex2RestTime, setWorkout1Ex2RestTime] = useState([]);
  const [workout1Ex2Sets, setWorkout1Ex2Sets] = useState([]);
  const [workout1Ex2Weight, setWorkout1Ex2Weight] = useState([]);

  const [workout1Ex3, setWorkout1Ex3] = useState([]);
  const [workout1Ex3Reps, setWorkout1Ex3Reps] = useState([]);
  const [workout1Ex3RestTime, setWorkout1Ex3RestTime] = useState([]);
  const [workout1Ex3Sets, setWorkout1Ex3Sets] = useState([]);
  const [workout1Ex3Weight, setWorkout1Ex3Weight] = useState([]);

  // Workout 5 Exercises
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout5Ex1(data.Workout_Five.Exercise_One.Exercise);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout5Ex2(data.Workout_Five.Exercise_Two.Exercise);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout5Ex3(data.Workout_Five.Exercise_Three.Exercise);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout Five Reps
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout5Ex1Reps(data.Workout_Five.Exercise_One.Reps);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout5Ex2Reps(data.Workout_Five.Exercise_Two.Reps);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout5Ex3Reps(data.Workout_Five.Exercise_Three.Reps);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout Five Rest Time
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout5Ex1RestTime(data.Workout_Five.Exercise_One.Rest_time);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout5Ex2RestTime(data.Workout_Five.Exercise_Two.Rest_time);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout5Ex3RestTime(data.Workout_Five.Exercise_Three.Rest_time);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout Five Sets
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout5Ex1Sets(data.Workout_Five.Exercise_One.Sets);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout5Ex2Sets(data.Workout_Five.Exercise_Two.Sets);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout5Ex3Sets(data.Workout_Five.Exercise_Three.Sets);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout Five Weights
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout5Ex1Weight(data.Workout_Five.Exercise_One.Weight);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout5Ex2Weight(data.Workout_Five.Exercise_Two.Weight);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout5Ex3Weight(data.Workout_Five.Exercise_Three.Weight);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout 4 Exercises

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout4Ex1(data.Workout_Four.Exercise_One.Exercise);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout4Ex2(data.Workout_Four.Exercise_Two.Exercise);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout4Ex3(data.Workout_Four.Exercise_Three.Exercise);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout Four Reps
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout4Ex1Reps(data.Workout_Four.Exercise_One.Reps);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout4Ex2Reps(data.Workout_Four.Exercise_Two.Reps);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout4Ex3Reps(data.Workout_Four.Exercise_Three.Reps);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout Four Rest Time
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout4Ex1RestTime(data.Workout_Four.Exercise_One.Rest_time);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout4Ex2RestTime(data.Workout_Four.Exercise_Two.Rest_time);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout4Ex3RestTime(data.Workout_Four.Exercise_Three.Rest_time);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout Four Sets
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout4Ex1Sets(data.Workout_Four.Exercise_One.Sets);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout4Ex2Sets(data.Workout_Four.Exercise_Two.Sets);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout4Ex3Sets(data.Workout_Four.Exercise_Three.Sets);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout Four Weights
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout4Ex1Weight(data.Workout_Four.Exercise_One.Weight);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout4Ex2Weight(data.Workout_Four.Exercise_Two.Weight);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout4Ex3Weight(data.Workout_Four.Exercise_Three.Weight);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout 3 Exercises

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout3Ex1(data.Workout_Three.Exercise_One.Exercise);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout3Ex2(data.Workout_Three.Exercise_Two.Exercise);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout3Ex3(data.Workout_Three.Exercise_Three.Exercise);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout 3 Reps
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout3Ex1Reps(data.Workout_Three.Exercise_One.Reps);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout3Ex2Reps(data.Workout_Three.Exercise_Two.Reps);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout3Ex3Reps(data.Workout_Three.Exercise_Three.Reps);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout 3 Rest Time
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout3Ex1RestTime(data.Workout_Three.Exercise_One.Rest_time);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout3Ex2RestTime(data.Workout_Three.Exercise_Two.Rest_time);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout3Ex3RestTime(data.Workout_Three.Exercise_Three.Rest_time);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout 3 Sets
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout3Ex1Sets(data.Workout_Three.Exercise_One.Sets);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout3Ex2Sets(data.Workout_Three.Exercise_Two.Sets);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout3Ex3Sets(data.Workout_Three.Exercise_Three.Sets);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout 3 Weights
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout3Ex1Weight(data.Workout_Three.Exercise_One.Weight);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout3Ex2Weight(data.Workout_Three.Exercise_Two.Weight);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout3Ex3Weight(data.Workout_Three.Exercise_Three.Weight);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout 2 Exercises

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout2Ex1(data.Workout_Two.Exercise_One.Exercise);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout2Ex2(data.Workout_Two.Exercise_Two.Exercise);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout2Ex3(data.Workout_Two.Exercise_Three.Exercise);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout 2 Reps
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout2Ex1Reps(data.Workout_Two.Exercise_One.Reps);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout2Ex2Reps(data.Workout_Two.Exercise_Two.Reps);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout2Ex3Reps(data.Workout_Two.Exercise_Three.Reps);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout 2 Rest Time
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout2Ex1RestTime(data.Workout_Two.Exercise_One.Rest_time);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout2Ex2RestTime(data.Workout_Two.Exercise_Two.Rest_time);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout2Ex3RestTime(data.Workout_Two.Exercise_Three.Rest_time);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout 2 Sets
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout2Ex1Sets(data.Workout_Two.Exercise_One.Sets);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout2Ex2Sets(data.Workout_Two.Exercise_Two.Sets);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout2Ex3Sets(data.Workout_Two.Exercise_Three.Sets);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout 2 Weights
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout2Ex1Weight(data.Workout_Two.Exercise_One.Weight);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout2Ex2Weight(data.Workout_Two.Exercise_Two.Weight);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout2Ex3Weight(data.Workout_Two.Exercise_Three.Weight);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout 1 Exercises
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout1Ex1(data.Workout_One.Exercise_One.Exercise);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout1Ex2(data.Workout_One.Exercise_Two.Exercise);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout1Ex3(data.Workout_One.Exercise_Three.Exercise);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout 1 Reps
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout1Ex1Reps(data.Workout_One.Exercise_One.Reps);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout1Ex2Reps(data.Workout_One.Exercise_Two.Reps);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout1Ex3Reps(data.Workout_One.Exercise_Three.Reps);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout 1 Rest Time
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout1Ex1RestTime(data.Workout_One.Exercise_One.Rest_time);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout1Ex2RestTime(data.Workout_One.Exercise_Two.Rest_time);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout1Ex3RestTime(data.Workout_One.Exercise_Three.Rest_time);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout 1 Sets
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout1Ex1Sets(data.Workout_One.Exercise_One.Sets);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout1Ex2Sets(data.Workout_One.Exercise_Two.Sets);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout1Ex3Sets(data.Workout_One.Exercise_Three.Sets);
        })
      );
    };
    fetchPost();
  }, []);

  // Workout 1 Weights
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout1Ex1Weight(data.Workout_One.Exercise_One.Weight);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout1Ex2Weight(data.Workout_One.Exercise_Two.Weight);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setWorkout1Ex3Weight(data.Workout_One.Exercise_Three.Weight);
        })
      );
    };
    fetchPost();
  }, []);

  const workouts = [
    {
      exercise1: workout1Ex1,
      rep1: workout1Ex1Reps,
      restTime1: workout1Ex1RestTime,
      set1: workout1Ex1Sets,
      weight1: workout1Ex1Weight,
      exercise2: workout1Ex2,
      rep2: workout1Ex2Reps,
      restTime2: workout1Ex2RestTime,
      set2: workout1Ex2Sets,
      weight2: workout1Ex2Weight,
      exercise3: workout1Ex3,
      rep3: workout1Ex3Reps,
      restTime3: workout1Ex3RestTime,
      set3: workout1Ex3Sets,
      weight3: workout1Ex3Weight
    },
    {
      exercise1: workout2Ex1,
      rep1: workout2Ex1Reps,
      restTime1: workout2Ex1RestTime,
      set1: workout2Ex1Sets,
      weight1: workout2Ex1Weight,
      exercise2: workout2Ex2,
      rep2: workout2Ex2Reps,
      restTime2: workout2Ex2RestTime,
      set2: workout2Ex2Sets,
      weight2: workout2Ex2Weight,
      exercise3: workout2Ex3,
      rep3: workout2Ex3Reps,
      restTime3: workout2Ex3RestTime,
      set3: workout2Ex3Sets,
      weight3: workout2Ex3Weight
    },
    {
      exercise1: workout3Ex1,
      rep1: workout3Ex1Reps,
      restTime1: workout3Ex1RestTime,
      set1: workout3Ex1Sets,
      weight1: workout3Ex1Weight,
      exercise2: workout3Ex2,
      rep2: workout3Ex2Reps,
      restTime2: workout3Ex2RestTime,
      set2: workout3Ex2Sets,
      weight2: workout3Ex2Weight,
      exercise3: workout3Ex3,
      rep3: workout3Ex3Reps,
      restTime3: workout3Ex3RestTime,
      set3: workout3Ex3Sets,
      weight3: workout3Ex3Weight
    },
    {
      exercise1: workout4Ex1,
      rep1: workout4Ex1Reps,
      restTime1: workout4Ex1RestTime,
      set1: workout4Ex1Sets,
      weight1: workout4Ex1Weight,
      exercise2: workout4Ex2,
      rep2: workout4Ex2Reps,
      restTime2: workout4Ex2RestTime,
      set2: workout4Ex2Sets,
      weight2: workout4Ex2Weight,
      exercise3: workout4Ex3,
      rep3: workout4Ex3Reps,
      restTime3: workout4Ex3RestTime,
      set3: workout4Ex3Sets,
      weight3: workout4Ex3Weight
    },
    {
      exercise1: workout5Ex1,
      rep1: workout5Ex1Reps,
      restTime1: workout5Ex1RestTime,
      set1: workout5Ex1Sets,
      weight1: workout5Ex1Weight,
      exercise2: workout5Ex2,
      rep2: workout5Ex2Reps,
      restTime2: workout5Ex2RestTime,
      set2: workout5Ex2Sets,
      weight2: workout5Ex2Weight,
      exercise3: workout5Ex3,
      rep3: workout5Ex3Reps,
      restTime3: workout5Ex3RestTime,
      set3: workout5Ex3Sets,
      weight3: workout5Ex3Weight
    }
  ];

  let workoutCards = workouts.map(workout => {
    return (
      <li className="flex-item">
        <WorkoutCard workout={workout} />
      </li>
    );
  });

  return (
    <div className="workouts">
      <NavBar></NavBar>
      <header className="workouts-header">
        <img className="strength-image" src={strength} alt="strength-img"></img>
        <ul className="flex-container wrap-reversez">{workoutCards}</ul>
      </header>
    </div>
  );
}
