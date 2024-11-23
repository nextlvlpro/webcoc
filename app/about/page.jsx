// app/about/page.js
import React from "react";

const page = () => {
  return (
    <div className="mx-auto py-16 bg-black px-4">
      <h1 className="text-3xl font-bold text-purple-300 mb-4">
        About Clash Companion
      </h1>
      <p className="text-lg text-purple-200 mb-4">
        Clash Companion is a comprehensive tool designed for Clash of Clans
        enthusiasts. Our mission is to provide players with the resources they
        need to enhance their gaming experience. Whether you are tracking player
        stats, searching for clans, or analyzing clan performance, Clash
        Companion has you covered.
      </p>

      <h2 className="text-2xl font-semibold text-purple-300 mt-8 mb-4">
        Features
      </h2>
      <ul className="list-disc list-inside text-purple-200 mb-4">
        <li>Track player statistics and achievements.</li>
        <li>Search for clans based on various criteria.</li>
        <li>Analyze clan performance and capital.</li>
        <li>Stay updated with the latest game changes and events.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-purple-300 mt-8 mb-4">
        Terms and Conditions
      </h2>
      <p className="text-lg text-purple-200 mb-4">
        By using Clash Companion, you agree to comply with the following terms
        and conditions as set forth by the Clash of Clans API:
      </p>
      <h2 className="text-2xl font-semibold text-purple-300 mt-8 mb-4">
        API Usage Commitment
      </h2>
      <div className="bg-purple-900/50 border border-purple-800 p-6 rounded-lg">
        <p className="text-purple-200 mb-4">
          I, as the developer of Clash Companion, hereby affirm my commitment to
          the following principles in compliance with Supercell's API Terms of
          Service:
        </p>
        <ul className="list-disc list-inside text-purple-200 space-y-2 mb-4">
          <li>
            I solemnly commit to using the Supercell API solely for
            non-commercial, community-driven purposes.
          </li>
          <li>
            I acknowledge that this application is an independent tool and does
            not compete with Clash of Clans.
          </li>
          <li>
            I explicitly declare that Clash Companion is not affiliated with,
            endorsed by, or officially connected to Supercell.
          </li>
          <li>
            I guarantee full compliance with all applicable privacy and data
            protection regulations.
          </li>
          <li>
            I pledge to maintain the highest standards of user data protection
            and confidentiality.
          </li>
        </ul>
        <p className="text-purple-300 italic text-sm">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-purple-300 mt-8 mb-4">
        Contact Us
      </h2>
      <p className="text-lg text-purple-200 mb-4">
        If you have any questions or feedback, feel free to reach out to us at{" "}
        <a
          href="mailto:support@clashcompanion.com"
          className="text-purple-400 underline"
        >
          support@clashcompanion.com
        </a>
        .
      </p>
    </div>
  );
};

export default page;
