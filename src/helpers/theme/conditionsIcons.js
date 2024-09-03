
import {
  ClearNightIcon,
  SunIcon,
  CloudyIcon,
  DrizzleIcon,
  MistIcon,
  OvercastIcon,
  PartlyCloudyDay,
  PartyCloudyNight,
  RainIcon,
  SleetIcon,
  SnowIcon,
  ThunderstormDayIcon,
  ThunderstormNightIcon,
  FogDayIcon,
  FogNightIcon,
  FogIcon,
  HailIcon,
  ThunderstormRainDayIcon,
  ThunderstormRainNightIcon,
  ThunderstormSnowDayIcon,
  ThunderstormSnowNightIcon
} from '../../assets/Icons'

const conditionsIcons = {
  0: { day: <SunIcon />, night: <ClearNightIcon /> }, // Clear sky
  1: { day: <PartlyCloudyDay />, night: <PartyCloudyNight /> }, // 	Mainly clear
  2: { day: <CloudyIcon />, night: <CloudyIcon /> }, // partly cloud
  3: { day: <OvercastIcon />, night: <OvercastIcon /> }, // Overcast
  4: { day: <MistIcon />, night: <MistIcon /> }, // Visibility reduced by smoke
  5: { day: <MistIcon />, night: <MistIcon /> }, // Haze
  6: { day: <MistIcon />, night: <MistIcon /> }, // Widespread dust in suspension
  7: { day: <MistIcon />, night: <MistIcon /> }, // Dust or sand raised by wind
  8: { day: <MistIcon />, night: <MistIcon /> }, // Well-developed dust whirl(s)
  9: { day: <MistIcon />, night: <MistIcon /> }, // Duststorm or sandstorm within sight
  10: { day: <MistIcon />, night: <MistIcon /> }, // Mist
  11: { day: <FogDayIcon />, night: <FogNightIcon /> }, // Patches of shallow fog
  12: { day: <FogDayIcon />, night: <FogNightIcon /> }, // More or less continuous fog
  13: { day: <ThunderstormDayIcon />, night: <ThunderstormNightIcon /> }, // Lightning visible, no thunder
  14: { day: <RainIcon />, night: <RainIcon /> }, // Precipitation within sight, not reaching ground
  15: { day: <RainIcon />, night: <RainIcon /> }, // Precipitation within sight, reaching ground but distant
  16: { day: <RainIcon />, night: <RainIcon /> }, // Precipitation within sight, near to but not at station
  17: { day: <ThunderstormDayIcon />, night: <ThunderstormNightIcon /> }, // Thunderstorm, no precipitation
  18: { day: <ThunderstormDayIcon />, night: <ThunderstormNightIcon /> }, // Squalls at or within sight
  19: { day: <ThunderstormDayIcon />, night: <ThunderstormNightIcon /> }, // Funnel cloud(s)

  // RAIN / SNOW / DRIZZLE
  20: { day: <DrizzleIcon />, night: <DrizzleIcon /> }, // Drizzle or snow grains
  21: { day: <RainIcon />, night: <RainIcon /> }, // Rain (not freezing)
  22: { day: <SnowIcon />, night: <SnowIcon /> }, // Snow
  23: { day: <SleetIcon />, night: <SleetIcon /> }, // Rain and snow or ice pellets
  24: { day: <RainIcon />, night: <RainIcon /> }, // Freezing drizzle or freezing rain
  25: { day: <RainIcon />, night: <RainIcon /> }, // Shower(s) of rain
  26: { day: <SnowIcon />, night: <SnowIcon /> }, // Shower(s) of snow, or of rain and snow
  27: { day: <HailIcon />, night: <HailIcon /> }, // Shower(s) of hail, or of rain and hail
  28: { day: <FogDayIcon />, night: <FogNightIcon /> }, // Fog or ice fog
  29: { day: <ThunderstormDayIcon />, night: <ThunderstormNightIcon /> }, // Thunderstorm (with or without precipitation)

  // MIST / SNOW
  30: { day: <MistIcon />, night: <MistIcon /> }, // Slight or moderate duststorm
  31: { day: <MistIcon />, night: <MistIcon /> }, // Duststorm no appreciable change
  32: { day: <MistIcon />, night: <MistIcon /> }, // Duststorm has begun or increased
  33: { day: <MistIcon />, night: <MistIcon /> }, // Severe duststorm has decreased
  34: { day: <MistIcon />, night: <MistIcon /> }, // Severe duststorm no appreciable change
  35: { day: <MistIcon />, night: <MistIcon /> }, // Severe duststorm has begun or increased
  36: { day: <SnowIcon />, night: <SnowIcon /> }, // Slight or moderate blowing snow generally low
  37: { day: <SnowIcon />, night: <SnowIcon /> }, // Heavy drifting snow
  38: { day: <SnowIcon />, night: <SnowIcon /> }, // Slight or moderate blowing snow generally high
  39: { day: <SnowIcon />, night: <SnowIcon /> }, // Heavy drifting snow

  // FOG
  40: { day: <FogDayIcon />, night: <FogNightIcon /> }, // Fog or ice fog at a distance
  41: { day: <FogDayIcon />, night: <FogNightIcon /> }, // Fog or ice fog in patches
  42: { day: <FogDayIcon />, night: <FogNightIcon /> }, // Fog or ice fog, sky visible, has become thinner
  43: { day: <FogIcon />, night: <FogIcon /> }, // Fog or ice fog, sky invisible
  44: { day: <FogDayIcon />, night: <FogNightIcon /> }, // Fog or ice fog, sky visible, no appreciable change
  45: { day: <FogIcon />, night: <FogIcon /> }, // Fog or ice fog, sky invisible
  46: { day: <FogDayIcon />, night: <FogNightIcon /> }, // Fog or ice fog, sky visible, has become thicker
  47: { day: <FogIcon />, night: <FogIcon /> }, // Fog or ice fog, sky invisible
  48: { day: <FogDayIcon />, night: <FogNightIcon /> }, // Fog, depositing rime, sky visible
  49: { day: <FogIcon />, night: <FogIcon /> }, // Fog, depositing rime, sky invisible

  // DRIZZLE
  50: { day: <DrizzleIcon />, night: <DrizzleIcon /> }, // Drizzle, not freezing, intermittent
  51: { day: <DrizzleIcon />, night: <DrizzleIcon /> }, // Drizzle, not freezing, continuous
  52: { day: <DrizzleIcon />, night: <DrizzleIcon /> }, // Drizzle, not freezing, intermittent, moderate
  53: { day: <DrizzleIcon />, night: <DrizzleIcon /> }, // Drizzle, not freezing, continuous, moderate
  54: { day: <DrizzleIcon />, night: <DrizzleIcon /> }, // Drizzle, not freezing, intermittent, heavy
  55: { day: <DrizzleIcon />, night: <DrizzleIcon /> }, // Drizzle, not freezing, continuous, heavy
  56: { day: <DrizzleIcon />, night: <DrizzleIcon /> }, // Drizzle, freezing, slight
  57: { day: <DrizzleIcon />, night: <DrizzleIcon /> }, // Drizzle, freezing, moderate or heavy
  58: { day: <DrizzleIcon />, night: <DrizzleIcon /> }, // Drizzle and rain, slight
  59: { day: <DrizzleIcon />, night: <DrizzleIcon /> }, // Drizzle and rain, moderate or heavy

  // RAIN
  60: { day: <RainIcon />, night: <RainIcon /> }, // Rain, not freezing, intermittent, slight
  61: { day: <RainIcon />, night: <RainIcon /> }, // Rain, not freezing, continuous, slight
  62: { day: <RainIcon />, night: <RainIcon /> }, // Rain, not freezing, intermittent, moderate
  63: { day: <RainIcon />, night: <RainIcon /> }, // Rain, not freezing, continuous, moderate
  64: { day: <RainIcon />, night: <RainIcon /> }, // Rain, not freezing, intermittent, heavy
  65: { day: <RainIcon />, night: <RainIcon /> }, // Rain, not freezing, continuous, heavy
  66: { day: <RainIcon />, night: <RainIcon /> }, // Rain, freezing, slight
  67: { day: <RainIcon />, night: <RainIcon /> }, // Rain, freezing, moderate or heavy
  68: { day: <RainIcon />, night: <RainIcon /> }, // Rain or drizzle and snow, slight
  69: { day: <RainIcon />, night: <RainIcon /> }, // Rain or drizzle and snow, moderate or heavy

  // SNOW
  70: { day: <SnowIcon />, night: <SnowIcon /> }, // Snow, intermittent, slight
  71: { day: <SnowIcon />, night: <SnowIcon /> }, // Snow, continuous, slight
  72: { day: <SnowIcon />, night: <SnowIcon /> }, // Snow, intermittent, moderate
  73: { day: <SnowIcon />, night: <SnowIcon /> }, // Snow, continuous, moderate
  74: { day: <SnowIcon />, night: <SnowIcon /> }, // Snow, intermittent, heavy
  75: { day: <SnowIcon />, night: <SnowIcon /> }, // Snow, continuous, heavy
  76: { day: <SnowIcon />, night: <SnowIcon /> }, // Diamond dust (with or without fog)
  77: { day: <SnowIcon />, night: <SnowIcon /> }, // Snow grains (with or without fog)
  78: { day: <SnowIcon />, night: <SnowIcon /> }, // Ice pellets, intermittent
  79: { day: <HailIcon />, night: <HailIcon /> }, // Ice pellets, continuous,

  // THUNDERSTORM
  80: { day: <RainIcon />, night: <RainIcon /> }, // Rain shower(s), slight
  81: { day: <RainIcon />, night: <RainIcon /> }, // Rain shower(s), moderate or heavy
  82: { day: <SnowIcon />, night: <SnowIcon /> }, // Snow shower(s), slight
  83: { day: <SnowIcon />, night: <SnowIcon /> }, // Snow shower(s), moderate or heavy
  84: { day: <HailIcon />, night: <HailIcon /> }, // Hail shower(s)
  85: { day: <ThunderstormSnowDayIcon />, night: <ThunderstormSnowNightIcon /> }, // Thunderstorm, slight or moderate, with or without hail
  86: { day: <ThunderstormRainDayIcon />, night: <ThunderstormRainNightIcon /> }, // Thunderstorm, heavy, with or without hail
  87: { day: <ThunderstormRainDayIcon />, night: <ThunderstormRainNightIcon /> }, // Thunderstorm, slight or moderate, with hail
  88: { day: <ThunderstormRainDayIcon />, night: <ThunderstormRainNightIcon /> }, // Thunderstorm, heavy, with hail
  89: { day: <ThunderstormDayIcon />, night: <ThunderstormNightIcon /> }, // Thunderstorm, slight or moderate, no precipitation
  90: { day: <ThunderstormDayIcon />, night: <ThunderstormNightIcon /> }, // Thunderstorm, heavy, no precipitation
  91: { day: <ThunderstormDayIcon />, night: <ThunderstormNightIcon /> }, // Thunderstorm, slight or moderate, with moderate or heavy precipitation
  92: { day: <ThunderstormDayIcon />, night: <ThunderstormNightIcon /> }, // Thunderstorm, heavy, with moderate or heavy precipitation
  93: { day: <ThunderstormSnowDayIcon />, night: <ThunderstormSnowNightIcon /> }, // Thunderstorm, slight or moderate, with snow
  94: { day: <ThunderstormSnowDayIcon />, night: <ThunderstormSnowNightIcon /> }, // Thunderstorm, heavy, with snow
  95: { day: <ThunderstormRainDayIcon />, night: <ThunderstormRainNightIcon /> }, // Thunderstorm, slight or moderate, with rain
  96: { day: <ThunderstormRainDayIcon />, night: <ThunderstormRainNightIcon /> }, // Thunderstorm, heavy, with rain
  97: { day: <ThunderstormDayIcon />, night: <ThunderstormNightIcon /> }, // Thunderstorm, slight or moderate, with drizzle
  98: { day: <ThunderstormDayIcon />, night: <ThunderstormNightIcon /> }, // Thunderstorm, heavy, with drizzle
  99: { day: <ThunderstormDayIcon />, night: <ThunderstormNightIcon /> }, // Thunderstorm, slight or moderate, with snow grain
}

export default conditionsIcons