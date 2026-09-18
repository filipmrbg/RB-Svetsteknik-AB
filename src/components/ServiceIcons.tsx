import React from 'react';

interface IconProps {
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 1. Alla typer av svetsning
 * Svetsbrännare, skyddslåga och glödande svetsfog med gnistkärna
 */
export function WeldingTorchIcon({
  color = 'currentColor',
  size = 42,
  className,
  style,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', overflow: 'visible', ...style }}
    >
      {/* Basstål / arbetsstycke */}
      <path
        d="M6 38L24 38L42 38"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Svetsfog med pärlstruktur */}
      <path
        d="M10 38C12 35 14 35 16 38C18 35 20 35 22 38C24 35 26 35 28 38C30 35 32 35 34 38C36 35 38 35 40 38"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Svetsbrännare handtag och munstycke */}
      <path
        d="M34 10L24 20L21 27L24 30L31 27L41 17L34 10Z"
        stroke={color}
        strokeWidth="2.4"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.08"
      />
      <path
        d="M21 27L16 32"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Ljusbåge och gniststrålar */}
      <circle cx="16" cy="32" r="2.5" fill={color} />
      <line x1="16" y1="26" x2="16" y2="23" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="11" y1="28" x2="8" y2="26" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="21" y1="35" x2="24" y2="37" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="11" y1="36" x2="8" y2="38" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * 2. Stålmontage & Byggsmide
 * H-balk / I-balk med bultar och bärande stomkonstruktion
 */
export function SteelStructureIcon({
  color = 'currentColor',
  size = 42,
  className,
  style,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', overflow: 'visible', ...style }}
    >
      {/* Bärande stålpelare och balkram */}
      <rect
        x="9"
        y="7"
        width="30"
        height="34"
        rx="2"
        stroke={color}
        strokeWidth="2.4"
        fill={color}
        fillOpacity="0.05"
      />
      {/* Diagonala fackverksstag för vindavstyvning */}
      <line x1="9" y1="7" x2="39" y2="41" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="39" y1="7" x2="9" y2="41" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      {/* Tvärbalk mitt */}
      <line x1="9" y1="24" x2="39" y2="24" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
      {/* Bultförband i knutpunkter */}
      <circle cx="9" cy="7" r="2.5" fill={color} />
      <circle cx="39" cy="7" r="2.5" fill={color} />
      <circle cx="9" cy="41" r="2.5" fill={color} />
      <circle cx="39" cy="41" r="2.5" fill={color} />
      <circle cx="24" cy="24" r="2.5" fill={color} />
    </svg>
  );
}

/**
 * 3. Industriservice & Reparationer
 * Kraftfullt kugghjul med skiftnyckel och precisionsverktyg
 */
export function IndustrialServiceIcon({
  color = 'currentColor',
  size = 42,
  className,
  style,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', overflow: 'visible', ...style }}
    >
      {/* Kugghjul centralt */}
      <circle
        cx="24"
        cy="24"
        r="11"
        stroke={color}
        strokeWidth="2.4"
        fill={color}
        fillOpacity="0.08"
      />
      <circle cx="24" cy="24" r="4.5" stroke={color} strokeWidth="2.2" />
      {/* Kuggar runt om */}
      <path
        d="M24 8V13M24 35V40M8 24H13M35 24H40M12.7 12.7L16.2 16.2M31.8 31.8L35.3 35.3M12.7 35.3L16.2 31.8M31.8 16.2L35.3 12.7"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Skiftnyckel som korsar diagonalt */}
      <path
        d="M32 7L38 13L35 16L32 13L25 20L22 17L29 10L26 7Z"
        stroke={color}
        strokeWidth="2.2"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.15"
      />
    </svg>
  );
}

/**
 * 4. Fältservice & IWS Support
 * Mobil servicebuss med verktyg och certifierad kvalitetsstämpel
 */
export function FieldServiceIcon({
  color = 'currentColor',
  size = 42,
  className,
  style,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', overflow: 'visible', ...style }}
    >
      {/* Servicefordon kaross */}
      <path
        d="M7 16H29L36 24V34H7V16Z"
        stroke={color}
        strokeWidth="2.4"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.08"
      />
      {/* Förarhytt ruta */}
      <path
        d="M27 19H21V25H32L27 19Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Hjul */}
      <circle cx="14" cy="34" r="4" stroke={color} strokeWidth="2.4" fill="#ffffff" />
      <circle cx="14" cy="34" r="1.5" fill={color} />
      <circle cx="32" cy="34" r="4" stroke={color} strokeWidth="2.4" fill="#ffffff" />
      <circle cx="32" cy="34" r="1.5" fill={color} />
      {/* Marklinje */}
      <line x1="4" y1="38" x2="44" y2="38" stroke={color} strokeWidth="2.2" strokeLinecap="round" opacity="0.35" />
      {/* IWS Kvalitetsmärke / stjärna i hörnet */}
      <path
        d="M38 7L39.5 10.5L43 11L40.5 13.5L41 17L38 15L35 17L35.5 13.5L33 11L36.5 10.5L38 7Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.2"
      />
    </svg>
  );
}

export function ServiceIcon({
  type,
  color = 'currentColor',
  size = 42,
  className,
  style,
}: {
  type: string;
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  switch (type) {
    case 'svetsning':
    case 'specialsvetsning':
    case 'ror-svetsning':
      return <WeldingTorchIcon color={color} size={size} className={className} style={style} />;
    case 'stalmontage':
    case 'byggsmide':
    case 'smide':
      return <SteelStructureIcon color={color} size={size} className={className} style={style} />;
    case 'industriservice':
    case 'underhall':
    case 'reparationer':
      return <IndustrialServiceIcon color={color} size={size} className={className} style={style} />;
    case 'faltservice':
    case 'iws-support':
    case 'iws':
      return <FieldServiceIcon color={color} size={size} className={className} style={style} />;
    default:
      return <WeldingTorchIcon color={color} size={size} className={className} style={style} />;
  }
}

export default ServiceIcon;
