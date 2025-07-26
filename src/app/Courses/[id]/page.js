import { notFound } from "next/navigation";
import Image from "next/image";
import courses from "../data";
import Link from "next/link";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaBookmark,
  FaArrowLeft,
  FaProjectDiagram,
  FaQuestionCircle,
  FaBriefcase,
} from "react-icons/fa";

export default async function CourseDetails({ params }) {
  const { id } = await params;
  const course = courses.find((c) => c.id.toString() === id);

  if (!course) return notFound();

  return (
    <div className="mt-[4.5rem] bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
          {/* Left: Course Info */}
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">{course.title}</h1>
            <p className="text-lg text-gray-600">{course.description}</p>
            <div className="flex gap-3 flex-wrap mt-4">
              <span className="flex items-center gap-2 text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                <FaGraduationCap />
                {course.type}
              </span>
              <span className="flex items-center gap-2 text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                <FaCalendarAlt />
                Duration: 3-6 Months
              </span>
            </div>
            {/* Industry Projects */}
            <div className="pt-5 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <FaProjectDiagram className="text-blue-600 text-base" />
                <span>
                  <strong>Real-world</strong> Projects
                </span>
              </div>

              {/* Doubt Sessions */}
              <div className="flex items-center gap-2">
                <FaQuestionCircle className="text-rose-500 text-base" />
                <span>
                  <strong>Doubt Clearing</strong> Sessions
                </span>
              </div>

              {/* Placement Support */}
              <div className="flex items-center gap-2">
                <FaBriefcase className="text-green-700 text-base" />
                <span>
                  <strong>Placement</strong> Assistance
                </span>
              </div>
            </div>
          </div>

          {/* Right: Image & CTA */}
          <div className="space-y-4">
            <Image
              src={course.image}
              alt={course.title}
              width={500}
              height={300}
              className="rounded-lg w-full object-cover border"
            />
            <a
              href={`https://wa.me/9837218345?text=I'm%20interested%20in%20the%20${encodeURIComponent(
                course.title
              )}%20course`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-lg transition shadow"
            >
              <FaBookmark className="mr-2" />
              Enroll Now
            </a>
            <Link
              href="/Courses"
              className="text-blue-600 hover:underline text-sm flex items-center"
            >
              <FaArrowLeft className="mr-1" />
              Back to Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* What You'll Learn */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            What You’ll Learn
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-700">
            {course.overview}
          </p>
        </div>

        {/* Skills */}
        {course.skills?.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Skills You’ll Gain
            </h2>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {course.skills.map((skill, i) => (
                <li
                  key={i}
                  className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition"
                >
                  ✅ {skill}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Syllabus */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Course Content
          </h2>
          <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700">
            {course.syllabus.map((topic, index) => (
              <li key={index} className="hover:text-blue-600 transition">
                {topic}
              </li>
            ))}
          </ul>
        </div>

        {/* Course Details */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Course Details
          </h2>
          <p className="mt-3 leading-relaxed text-gray-700 text-lg">
            {course.details}
          </p>
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return courses.map((course) => ({ id: course.id.toString() }));
}
