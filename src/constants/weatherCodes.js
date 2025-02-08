const weatherCodes = {
  0: {
    description: "Cloud development not observed or not observable",
    details: "Characteristic change of the state of sky during the past hour",
  },
  1: {
    description: "Clouds generally dissolving or becoming less developed",
    details: "Characteristic change of the state of sky during the past hour",
  },
  2: {
    description: "State of sky on the whole unchanged",
    details: "Characteristic change of the state of sky during the past hour",
  },
  3: {
    description: "Clouds generally forming or developing",
    details: "Characteristic change of the state of sky during the past hour",
  },
  4: {
    description:
      "Visibility reduced by smoke, e.g. veldt or forest fires, industrial smoke or volcanic ashes",
    details:
      "Visibility reduced by smoke, e.g. veldt or forest fires, industrial smoke or volcanic ashes",
  },
  5: { description: "Haze", details: "Haze" },
  6: {
    description:
      "Widespread dust in suspension in the air, not raised by wind at or near the station at the \r\r\ntime of observation",
    details:
      "Widespread dust in suspension in the air, not raised by wind at or near the station at the \r\r\ntime of observation",
  },
  7: {
    description:
      "Dust or sand raised by wind at or near the station at the time of observation, \r\r\nbut no well developed dust whirl(s) or sand whirl(s), and no duststorm or sandstorm seen",
    details:
      "Dust or sand raised by wind at or near the station at the time of observation, \r\r\nbut no well developed dust whirl(s) or sand whirl(s), and no duststorm or sandstorm seen",
  },
  8: {
    description:
      "Well developed dust whirl(s) or sand whirl(s) seen at or near the station during the preceding \r\r\nhour or at the time ot observation, but no duststorm or sandstorm",
    details:
      "Well developed dust whirl(s) or sand whirl(s) seen at or near the station during the preceding \r\r\nhour or at the time ot observation, but no duststorm or sandstorm",
  },
  9: {
    description:
      "Duststorm or sandstorm within sight at the time of observation, or at the station during the \r\r\npreceding hour",
    details:
      "Duststorm or sandstorm within sight at the time of observation, or at the station during the \r\r\npreceding hour",
  },
  10: { description: "Mist", details: "Mist" },
  11: {
    description: "Patches",
    details:
      "shallow fog or ice fog at the station, whether on land or sea, not deeper than about 2 metres \r\r\non land or 10 metres at sea",
  },
  12: {
    description: "More or less continuous",
    details:
      "shallow fog or ice fog at the station, whether on land or sea, not deeper than about 2 metres \r\r\non land or 10 metres at sea",
  },
  13: {
    description: "Lightning visible, no thunder heard",
    details: "Lightning visible, no thunder heard",
  },
  14: {
    description:
      "Precipitation within sight, not reaching the ground or the surface of the sea",
    details:
      "Precipitation within sight, not reaching the ground or the surface of the sea",
  },
  15: {
    description:
      "Precipitation within sight, reaching the ground or the surface of the sea, \r\r\nbut distant, i.e. estimated to be more than 5 km from the station",
    details:
      "Precipitation within sight, reaching the ground or the surface of the sea, \r\r\nbut distant, i.e. estimated to be more than 5 km from the station",
  },
  16: {
    description:
      "Precipitation within sight, reaching the ground or the surface of the sea, \r\r\nnear to, but not at the station",
    details:
      "Precipitation within sight, reaching the ground or the surface of the sea, \r\r\nnear to, but not at the station",
  },
  17: {
    description:
      "Thunderstorm, but no precipitation at the time of observation",
    details: "Thunderstorm, but no precipitation at the time of observation",
  },
  18: {
    description: "Squalls",
    details:
      "at or within sight of the station during the preceding hour or at the time of observation",
  },
  19: {
    description: "Funnel cloud(s)**",
    details:
      "at or within sight of the station during the preceding hour or at the time of observation",
  },
  20: {
    description: "Drizzle (not freezing) or snow grains",
    details: "not falling as shower(s)",
  },
  21: {
    description: "Rain (not freezing)",
    details: "not falling as shower(s)",
  },
  22: { description: "Snow", details: "not falling as shower(s)" },
  23: {
    description: "Rain and snow or ice pellets",
    details: "not falling as shower(s)",
  },
  24: {
    description: "Freezing drizzle or freezing rain",
    details: "not falling as shower(s)",
  },
  25: { description: "Shower(s) of rain", details: "Shower(s) of rain" },
  26: {
    description: "Shower(s) of snow, or of rain and snow",
    details: "Shower(s) of snow, or of rain and snow",
  },
  27: {
    description: "Shower(s) of hail*, \r\r\nor of rain and hail*",
    details: "Shower(s) of hail*, \r\r\nor of rain and hail*",
  },
  28: { description: "Fog or ice fog", details: "Fog or ice fog" },
  29: {
    description: "Thunderstorm (with or without precipitation)",
    details: "Thunderstorm (with or without precipitation)",
  },
  30: {
    description: "Slight or moderate duststorm or sandstorm",
    details: "- has decreased during the preceding hour",
  },
  31: {
    description: "Slight or moderate duststorm or sandstorm",
    details: "- no appreciable change during the preceding hour",
  },
  32: {
    description: "Slight or moderate duststorm or sandstorm",
    details: "- has begun or has increased during the preceding hour",
  },
  33: {
    description: "Severe duststorm or sandstorm",
    details: "- has decreased during the preceding hour",
  },
  34: {
    description: "Severe duststorm or sandstorm",
    details: "- no appreciable change during the preceding hour",
  },
  35: {
    description: "Severe duststorm or sandstorm",
    details: "- has begun or has increased during the preceding hour",
  },
  36: {
    description: "Slight or moderate blowing snow",
    details: "generally low (below eye level)",
  },
  37: {
    description: "Heavy drifting snow",
    details: "generally low (below eye level)",
  },
  38: {
    description: "Slight or moderate blowing snow",
    details: "generally high (above eye level)",
  },
  39: {
    description: "Heavy drifting snow",
    details: "generally high (above eye level)",
  },
  40: {
    description:
      "Fog or ice fog at a distance at the time of observation, but not at the station during the preceding hour, \r\r\nthe fog or ice fog extending to a level above that of the observer",
    details:
      "Fog or ice fog at a distance at the time of observation, but not at the station during the preceding hour, \r\r\nthe fog or ice fog extending to a level above that of the observer",
  },
  41: {
    description: "Fog or ice fog in patches",
    details: "Fog or ice fog in patches",
  },
  42: {
    description: "Fog or ice fog, sky visible",
    details: "has become thinner during the preceding hour",
  },
  43: {
    description: "Fog or ice fog, sky invisible",
    details: "has become thinner during the preceding hour",
  },
  44: {
    description: "Fog or ice fog, sky visible",
    details: "no appreciable change during the preceding hour",
  },
  45: {
    description: "Fog or ice fog, sky invisible",
    details: "no appreciable change during the preceding hour",
  },
  46: {
    description: "Fog or ice fog, sky visible",
    details: "has begun or has become thicker during the preceding hour",
  },
  47: {
    description: "Fog or ice fog, sky invisible",
    details: "has begun or has become thicker during the preceding hour",
  },
  48: {
    description: "Fog, depositing rime, sky visible",
    details: "Fog, depositing rime, sky visible",
  },
  49: {
    description: "Fog, depositing rime, sky invisible",
    details: "Fog, depositing rime, sky invisible",
  },
  50: {
    description: "Drizzle, not freezing, intermittent",
    details: "slight at time of observation",
  },
  51: {
    description: "Drizzle, not freezing, continuous",
    details: "slight at time of observation",
  },
  52: {
    description: "Drizzle, not freezing, intermittent",
    details: "moderate at time of observation",
  },
  53: {
    description: "Drizzle, not freezing, continuous",
    details: "moderate at time of observation",
  },
  54: {
    description: "Drizzle, not freezing, intermittent",
    details: "heavy (dense) at time of observation",
  },
  55: {
    description: "Drizzle, not freezing, continuous",
    details: "heavy (dense) at time of observation",
  },
  56: {
    description: "Drizzle, freezing, slight",
    details: "Drizzle, freezing, slight",
  },
  57: {
    description: "Drizzle, freezing, moderate or heavy (dence)",
    details: "Drizzle, freezing, moderate or heavy (dence)",
  },
  58: {
    description: "Drizzle and rain, slight",
    details: "Drizzle and rain, slight",
  },
  59: {
    description: "Drizzle and rain, moderate or heavy",
    details: "Drizzle and rain, moderate or heavy",
  },
  60: {
    description: "Rain, not freezing, intermittent",
    details: "slight at time of observation",
  },
  61: {
    description: "Rain, not freezing, continuous",
    details: "slight at time of observation",
  },
  62: {
    description: "Rain, not freezing, intermittent",
    details: "moderate at time of observation",
  },
  63: {
    description: "Rain, not freezing, continuous",
    details: "moderate at time of observation",
  },
  64: {
    description: "Rain, not freezing, intermittent",
    details: "heavy at time of observation",
  },
  65: {
    description: "Rain, not freezing, continuous",
    details: "heavy at time of observation",
  },
  66: {
    description: "Rain, freezing, slight",
    details: "Rain, freezing, slight",
  },
  67: {
    description: "Rain, freezing, moderate or heavy (dence)",
    details: "Rain, freezing, moderate or heavy (dence)",
  },
  68: {
    description: "Rain or drizzle and snow, slight",
    details: "Rain or drizzle and snow, slight",
  },
  69: {
    description: "Rain or drizzle and snow, moderate or heavy",
    details: "Rain or drizzle and snow, moderate or heavy",
  },
  70: {
    description: "Intermittent fall of snowflakes",
    details: "slight at time of observation",
  },
  71: {
    description: "Continuous fall of snowflakes",
    details: "slight at time of observation",
  },
  72: {
    description: "Intermittent fall of snowflakes",
    details: "moderate at time of observation",
  },
  73: {
    description: "Continuous fall of snowflakes",
    details: "moderate at time of observation",
  },
  74: {
    description: "Intermittent fall of snowflakes",
    details: "heavy at time of observation",
  },
  75: {
    description: "Continuous fall of snowflakes",
    details: "heavy at time of observation",
  },
  76: {
    description: "Diamond dust (with or without fog)",
    details: "Diamond dust (with or without fog)",
  },
  77: {
    description: "Snow grains (with or without fog)",
    details: "Snow grains (with or without fog)",
  },
  78: {
    description: "Isolated star-like snow crystals (with or without fog)",
    details: "Isolated star-like snow crystals (with or without fog)",
  },
  79: { description: "Ice pellets", details: "Ice pellets" },
  80: {
    description: "Rain shower(s), slight",
    details: "Rain shower(s), slight",
  },
  81: {
    description: "Rain shower(s), moderate or heavy",
    details: "Rain shower(s), moderate or heavy",
  },
  82: {
    description: "Rain shower(s), violent",
    details: "Rain shower(s), violent",
  },
  83: {
    description: "Shower(s) of rain and snow mixed, slight",
    details: "Shower(s) of rain and snow mixed, slight",
  },
  84: {
    description: "Shower(s) of rain and snow mixed, moderate or heavy",
    details: "Shower(s) of rain and snow mixed, moderate or heavy",
  },
  85: {
    description: "Snow shower(s), slight",
    details: "Snow shower(s), slight",
  },
  86: {
    description: "Snow shower(s), moderate or heavy",
    details: "Snow shower(s), moderate or heavy",
  },
  87: {
    description:
      "Shower(s) of snow pellets or small hail, with or without rain or rain and snow mixed",
    details: "- slight",
  },
  88: {
    description:
      "Shower(s) of snow pellets or small hail, with or without rain or rain and snow mixed",
    details: "- moderate or heavy",
  },
  89: {
    description:
      "Shower(s) of hail*, with or without rain or rain and snow mixed, \r\r\nnot associated with thunder",
    details: "- slight",
  },
  90: {
    description:
      "Shower(s) of hail*, with or without rain or rain and snow mixed, \r\r\nnot associated with thunder",
    details: "- moderate or heavy",
  },
  91: {
    description: "Slight rain at time of observation",
    details:
      "Thunderstorm during the preceding hour but not at time of observation",
  },
  92: {
    description: "Moderate or heavy rain at time of observation",
    details:
      "Thunderstorm during the preceding hour but not at time of observation",
  },
  93: {
    description:
      "Slight snow, or rain and snow mixed or hail** at time of observation",
    details:
      "Thunderstorm during the preceding hour but not at time of observation",
  },
  94: {
    description:
      "Moderate or heavy snow, or rain and snow mixed or hail** at time of \r\r\nobservation",
    details:
      "Thunderstorm during the preceding hour but not at time of observation",
  },
  95: {
    description:
      "Thunderstorm, slight or moderate, without hail** but with rain and/or \r\r\nsnow at time of observation",
    details: "Thunderstorm at time of observation",
  },
  96: {
    description:
      "Thunderstorm, slight or moderate, with hail** at time of observation",
    details: "Thunderstorm at time of observation",
  },
  97: {
    description:
      "Thunderstorm, heavy, without hail** but with rain and/or snow \r\r\nat time of observation",
    details: "Thunderstorm at time of observation",
  },
  98: {
    description:
      "Thunderstorm combined with duststorm or sandstorm at time of observation",
    details: "Thunderstorm at time of observation",
  },
  99: {
    description: "Thunderstorm, heavy, with hail** at time of observation",
    details: "Thunderstorm at time of observation",
  },
};

export default weatherCodes;
