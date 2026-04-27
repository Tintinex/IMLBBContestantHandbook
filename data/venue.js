/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  SECTION: VENUE & NEARBY SPOTS                           ║
 * ║  Owner:   IMLBB Operations / Venue team                   ║
 * ║  Update:  When the host hotel or city changes            ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 *  Map coordinates:
 *    mapBbox   — OpenStreetMap bounding box [west,south,east,north]
 *    mapMarker — [lat,lon] for the red pin
 *
 *  To get coordinates for a new venue:
 *    1. Go to openstreetmap.org and find the hotel
 *    2. Right-click → "Show address" → note lat/lon
 *    3. Adjust mapBbox to frame the hotel
 */

const VENUE = {
  name:    'The Congress Plaza Hotel',
  address: '520 S Michigan Ave',
  city:    'Chicago',
  state:   'Illinois',
  zip:     '60605',
  country: 'United States',

  // OpenStreetMap embed: bbox [west, south, east, north] and marker [lat, lon]
  mapBbox:   '-87.6260,41.8700,-87.6215,41.8740',
  mapMarker: '41.8719,-87.6237',
  googleMapsUrl: 'https://maps.google.com/?q=Congress+Plaza+Hotel+520+S+Michigan+Ave+Chicago',

  // Short paragraphs shown in the venue section
  airportNote:    'You can travel via the subway Blue Line or via taxi. The subway route could take an hour and a taxi around 30 minutes.',
  amenitiesNote:  'The hotel has several amenities including a barbershop and restaurant. The hotel is situated next to several shops, cafes, restaurants and fast food outlets. There are several gyms nearby.',
  northTowerTip:  true,   // show "request North Tower room" tip?
};

// Nearby points of interest shown in the Nearby Spots section
// Update if the venue moves to a different neighbourhood
// lat / lon are used to place markers on the interactive map
const NEARBY_SPOTS = [
  { type: 'Museum',      name: 'Leather Archives & Museum', url: 'https://leatherarchives.org/',        lat: 41.9947, lon: -87.6694 },
  { type: 'Bar',         name: 'Touché',                                                                 lat: 41.9941, lon: -87.6686 },
  { type: 'Bar',         name: 'Jackhammer',                                                             lat: 41.9939, lon: -87.6685 },
  { type: 'Bar',         name: 'Sidetrack',                 url: 'https://www.sidetrackchicago.com/',   lat: 41.9379, lon: -87.6483 },
  { type: 'Theater',     name: 'The Riviera Theater',        url: 'https://rivieratheatre.org/',         lat: 41.9685, lon: -87.6587 },
  { type: 'Music Venue', name: 'House of Blues Chicago',     url: 'https://chicago.houseofblues.com/',   lat: 41.8883, lon: -87.6348 },
  { type: 'Park',        name: 'Millennium Park',                                                        lat: 41.8827, lon: -87.6233 },
  { type: 'Museum',      name: 'Art Institute of Chicago',                                               lat: 41.8796, lon: -87.6237 },
  { type: 'Aquarium',    name: 'Shedd Aquarium',                                                         lat: 41.8676, lon: -87.6140 },
  { type: 'Pier',        name: 'Navy Pier',                                                              lat: 41.8917, lon: -87.6086 },
  { type: 'Coffee',      name: 'Intelligentsia Coffee',                                                  lat: 41.8901, lon: -87.6238 },
];

if (typeof module !== 'undefined') module.exports = { VENUE, NEARBY_SPOTS };
