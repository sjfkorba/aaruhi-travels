"use client";

import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

type LocationInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isGoogleReady?: boolean;
};

export default function LocationInput({
  value,
  onChange,
  placeholder = "Enter location",
  isGoogleReady = false,
}: LocationInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const autocompleteRef = useRef<any>(null);

  useEffect(() => {
    if (!isGoogleReady) return;
    if (!inputRef.current) return;

    const g = (window as any).google;
    if (!g?.maps?.places) return;

    if (!autocompleteRef.current) {
      autocompleteRef.current = new g.maps.places.Autocomplete(
        inputRef.current,
        {
          componentRestrictions: { country: "in" },
          fields: ["formatted_address", "name", "geometry"],
        }
      );

      autocompleteRef.current.addListener("place_changed", () => {
        const place = autocompleteRef.current.getPlace();
        const selectedValue =
          place?.formatted_address ||
          place?.name ||
          inputRef.current?.value ||
          "";

        onChange(selectedValue);
      });
    }
  }, [isGoogleReady, onChange]);

  return (
    <div className="relative">
      <MapPin
        size={18}
        className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-gray-400"
      />

      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-11 pr-4 outline-none transition focus:border-orange-500"
      />
    </div>
  );
}