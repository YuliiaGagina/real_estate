import React from "react";

const GoogleMap = ({ address }) => {
  return (
    <a
      href={`https://www.google.com/maps/place/${encodeURIComponent(address)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.913948046337!2d12.4925226!3d41.8947077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f614bc0bc7945%3A0x84cf1b43edc4309b!2sReal%20Estate!5e0!3m2!1sru!2sua!4v1708088986536!5m2!1sru!2sua"
        width="100%"
        height="450"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </a>
  );
};

export default GoogleMap;
