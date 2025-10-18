import Image from "next/image";

const ClassSection = () => {
  const classes = [
    {
      title:
        "Mastering Goju-ryu: The Foundation of Discipline, Respect, and Continuous Improvement.",
      detail:
        "Our Traditional Karate program focuses on the authentic Okinawa Goju-ryu style, meaning hard and soft. This powerful blend of techniques is designed to develop a balanced body and mind, equipping students with exceptional physical coordination, strength, and focus. Training transcends mere fighting, centered on the Japanese philosophy of Kaizen (continuous improvement), which we apply to every aspect of life. We instill core values like respect, discipline, and perseverance, vital for personal growth. Students learn fundamental movements, Kata (forms), and Kumite (sparring), preparing them not just for self-defense but for life’s challenges. The structured Grading system, recognized globally, tracks progress from white to black belt, motivating students through clear, achievable milestones. As an affiliate of the Okinawa Goju-ryu Karate-Do Federation Malaysia and a member of the World Karate Masters Federation (WKMf), we ensure the highest standard of traditional instruction. This program is ideal for children, strengthening their minds and confidence, and for adults seeking a holistic martial arts practice. Join KKA to embrace the traditional path and develop the attitude of Fall 7 times stand up 8.",
      imageUrl: "/images/class1.jpg",
    },
    {
      title:
        "Train with National Coaches, Compete Globally, and Achieve Championship Success.",
      detail:
        "The Sports Karate program is designed for dedicated students aiming for competitive excellence at the highest levels. As a member of the Karate Association of India (KAI), we offer elite coaching led by our Chief Technical Director, Sensei Debasish Dhali, a KAI National Coach and A Grade Judge. Our coaching staff has a proven track record of developing champions at state, national, and international championships, including events in Japan, Sri Lanka, and Malaysia. This program focuses on the specific skill sets required for competitive Kata and Kumite, including developing explosive speed, strategic footwork, accurate force/focus, and peak physical conditioning. Students learn to handle pressure, build mental resilience, and perform on the global stage. We utilize our strong affiliations to ensure our athletes are always current with international rules and techniques. Whether you aspire to win a local championship or represent India, our Sports Karate program provides the expert guidance and competitive environment needed to maximize your potential. Join the KKA team and continue our legacy of upholding the name of our country and institution.",
      imageUrl: "/images/class2.jpg",
    },
    {
      title:
        "Practical Self Defence: Building Confidence, Security, and Independence for Women.",
      detail:
        "Our specialized Self Defence for Women class provides essential, practical training focused on real-world scenarios. We recognize the utmost need for every individual to feel secure and in control. This program is built upon the principles of Goju-ryu, utilizing techniques that emphasize efficiency, leverage, and practical application, regardless of size or strength. The curriculum is designed to go beyond basic blocks and strikes. We teach vital life skills such as situational awareness, boundary setting, how to differentiate good or bad touch, and most importantly, how to stand up for yourself. The training is structured to build confidence and self-esteem, empowering participants to be alert, secure, and independent. We aim to make every participant physically fit and mentally ready to face any situation where self-defense plays a major role. By focusing on simple yet highly effective defenses against common attacks, we equip women and girls with the knowledge to protect their own bodies and navigate their world with security. Join this class to feel truly prepared and confident in your ability to take care of yourself.",
      imageUrl: "/images/class3.jpg",
    },
     {
      title:
        "Karate Belt Ranking System: The Journey from White to Black Belt",
       detail:
        "In Karate, every belt color represents a stage of personal growth, skill, and discipline. At Kaizen Karate-Do Association India, we follow a structured and internationally recognized grading system that guides each student step-by-step from beginner to master.",
      
      imageUrl: "/images/class4.jpg",
    },
  ]; 
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      {classes.map((classItem, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row w-full h-auto justify-between gap-8"
        >
          <div className="w-full md:w-[40%] h-full rounded-xl">
            <Image
              src={classItem.imageUrl}
              alt={classItem.title}
              width={500}
              height={500}
              className=" w-full h-full object-cover rounded-xl"
              
            />
          </div>
          <div
            className="w-full md:w-[60%] h-full flex flex-col gap-2"
           
          >
            <h1 className="text-2xl font-bold text-defined-purple">
              {classItem.title}
            </h1>
            <p className="text-defined-brown text-justify">
              {classItem.detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClassSection;
