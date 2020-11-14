import React, { useState, useEffect } from "react";
import NavBar from "../../components/navbar/navbar";

import "./CardioWorkouts.css";
import "./StrengthWorkouts.css";

import cardio from "./cardio.JPG";

import CardioCard from "./CardioCard";

export default function CardioWorkouts() {
  const [cardio5Sets, setCardio5Sets] = useState([]);
  const [cardio5Ex1, setCardio5Ex1] = useState([]);
  const [cardio5Ex2, setCardio5Ex2] = useState([]);
  const [cardio5Ex3, setCardio5Ex3] = useState([]);

  const [cardio4Sets, setCardio4Sets] = useState([]);
  const [cardio4Ex1, setCardio4Ex1] = useState([]);
  const [cardio4Ex2, setCardio4Ex2] = useState([]);
  const [cardio4Ex3, setCardio4Ex3] = useState([]);

  const [cardio3Sets, setCardio3Sets] = useState([]);
  const [cardio3Ex1, setCardio3Ex1] = useState([]);
  const [cardio3Ex2, setCardio3Ex2] = useState([]);
  const [cardio3Ex3, setCardio3Ex3] = useState([]);

  const [cardio2Sets, setCardio2Sets] = useState([]);
  const [cardio2Ex1, setCardio2Ex1] = useState([]);
  const [cardio2Ex2, setCardio2Ex2] = useState([]);
  const [cardio2Ex3, setCardio2Ex3] = useState([]);

  const [cardio1Sets, setCardio1Sets] = useState([]);
  const [cardio1Ex1, setCardio1Ex1] = useState([]);
  const [cardio1Ex2, setCardio1Ex2] = useState([]);
  const [cardio1Ex3, setCardio1Ex3] = useState([]);

  // cardio 5
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/cardio:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setCardio5Sets(data.Cardio_Five.Circuit_sets);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/cardio:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setCardio5Ex1(data.Cardio_Five.Exercise_One);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/cardio:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setCardio5Ex2(data.Cardio_Five.Exercise_Two);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/cardio:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setCardio5Ex3(data.Cardio_Five.Exercise_Three);
        })
      );
    };
    fetchPost();
  }, []);

  // cardio 4
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/cardio:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setCardio4Sets(data.Cardio_Four.Circuit_sets);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/cardio:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setCardio4Ex1(data.Cardio_Four.Exercise_One);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/cardio:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setCardio4Ex2(data.Cardio_Four.Exercise_Two);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/cardio:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setCardio4Ex3(data.Cardio_Four.Exercise_Three);
        })
      );
    };
    fetchPost();
  }, []);

  // cardio 3
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/cardio:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setCardio3Sets(data.Cardio_Three.Circuit_sets);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/cardio:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setCardio3Ex1(data.Cardio_Three.Exercise_One);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/cardio:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setCardio3Ex2(data.Cardio_Three.Exercise_Two);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/cardio:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setCardio3Ex3(data.Cardio_Three.Exercise_Three);
        })
      );
    };
    fetchPost();
  }, []);

  // cardio 2
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/cardio:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setCardio2Sets(data.Cardio_Two.Circuit_sets);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/cardio:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setCardio2Ex1(data.Cardio_Two.Exercise_One);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/cardio:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setCardio2Ex2(data.Cardio_Two.Exercise_Two);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/cardio:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setCardio2Ex3(data.Cardio_Two.Exercise_Three);
        })
      );
    };
    fetchPost();
  }, []);

  // cardio 1
  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/cardio:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setCardio1Sets(data.Cardio_One.Circuit_sets);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/cardio:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setCardio1Ex1(data.Cardio_One.Exercise_One);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/cardio:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setCardio1Ex2(data.Cardio_One.Exercise_Two);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/cardio:tonyH@gmail.com/difficulty:easy", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setCardio1Ex3(data.Cardio_One.Exercise_Three);
        })
      );
    };
    fetchPost();
  }, []);

  const cardioWorkouts = [
    {
      sets: cardio1Sets,
      exercise1: cardio1Ex1,
      exercise2: cardio1Ex2,
      exercise3: cardio1Ex3
    },
    {
      sets: cardio2Sets,
      exercise1: cardio2Ex1,
      exercise2: cardio2Ex2,
      exercise3: cardio2Ex3
    },
    {
      sets: cardio3Sets,
      exercise1: cardio3Ex1,
      exercise2: cardio3Ex2,
      exercise3: cardio3Ex3
    },
    {
      sets: cardio4Sets,
      exercise1: cardio4Ex1,
      exercise2: cardio4Ex2,
      exercise3: cardio4Ex3
    },
    {
      sets: cardio5Sets,
      exercise1: cardio5Ex1,
      exercise2: cardio5Ex2,
      exercise3: cardio5Ex3
    }
  ];

  let workoutCards = cardioWorkouts.map(workout => {
    return (
      <li className="flex-item">
        <CardioCard workout={workout} />
      </li>
    );
  });

  return (
    <div className="workouts">
      <NavBar></NavBar>
      <header className="workouts-header">
        <img className="cardio-image" src={cardio} alt="cardio-img"></img>
        <ul className="flex-container wrap-reversez">{workoutCards}</ul>
      </header>
    </div>
  );
}
