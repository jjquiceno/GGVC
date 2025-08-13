import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export function DatePickerRadix({ label, value, onSelect }) {
  const [selected, setSelected] = React.useState(
    value ? new Date(value) : undefined
  );

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="px-4 py-2 border rounded">
          {selected
            ? selected.toLocaleDateString("es-CO")
            : label}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="bg-white p-4 rounded shadow-lg border">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={(date) => {
              if (date) {
                setSelected(date);
                onSelect(date.toISOString().split("T")[0]);
              }
            }}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}