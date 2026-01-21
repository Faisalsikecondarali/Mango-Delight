import { useMemo, useState } from "react";

import { formatRs, mangoSchedule } from "@/data/mangoCatalog";
import styles from "@/css/OrderForm.module.css";

const WHATSAPP_NUMBER = "923166136973";

type VarietyOption = {
  label: string;
  urdu: string;
  availability: string;
  price: string;
};

const varietyOptions: VarietyOption[] = mangoSchedule.map((m) => ({
  label: `${m.name} (${m.boxKg}kg)`,
  urdu: m.urdu,
  availability: m.when,
  price: formatRs(m.boxPriceRs),
}));

function buildWhatsAppUrl(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [variety, setVariety] = useState(varietyOptions[0]?.label ?? "");
  const [kg, setKg] = useState<number>(10);
  const [error, setError] = useState<string | null>(null);

  const selected = useMemo(
    () => varietyOptions.find((v) => v.label === variety),
    [variety],
  );

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        setError(null);

        const trimmedName = name.trim();
        const trimmedPhone = phone.trim();
        const trimmedAddress = address.trim();

        if (!trimmedName) {
          setError("Please enter your name.");
          return;
        }

        if (!trimmedPhone) {
          setError("Please enter your phone number.");
          return;
        }

        if (!trimmedAddress) {
          setError("Please enter your address.");
          return;
        }

        if (!Number.isFinite(kg) || kg < 10) {
          setError("Minimum order is 10 kg.");
          return;
        }

        const lines = [
          "Mango Delight Order",
          "",
          `Name: ${trimmedName}`,
          `Phone: ${trimmedPhone}`,
          `Address: ${trimmedAddress}`,
          selected ? `Variety: ${selected.label} (${selected.urdu})` : `Variety: ${variety}`,
          `Quantity: ${kg} kg`,
          selected
            ? `Availability: ${selected.availability} | Price (10kg): ${selected.price}`
            : undefined,
          "",
          "Please confirm availability and delivery time.",
        ].filter(Boolean) as string[];

        const url = buildWhatsAppUrl(lines.join("\n"));
        window.open(url, "_blank", "noopener,noreferrer");
      }}
    >
      {error ? (
        <div className={styles.alert}>
          {error}
        </div>
      ) : null}

      <div className="row g-3">
        <div className="col-12 col-sm-6">
          <div className="d-grid gap-2">
            <label className={styles.label}>Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={styles.input}
            />
          </div>
        </div>

        <div className="col-12 col-sm-6">
          <div className="d-grid gap-2">
            <label className={styles.label}>Phone Number</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="03xx xxxxxxx"
              className={styles.input}
            />
          </div>
        </div>
      </div>

      <div className="d-grid gap-2">
        <label className={styles.label}>Delivery Address</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="House/Street, Area, City"
          rows={4}
          className={styles.textarea}
        />
      </div>

      <div className="row g-3">
        <div className="col-12 col-sm-6">
          <div className="d-grid gap-2">
            <label className={styles.label}>Mango Variety</label>
            <select
              value={variety}
              onChange={(e) => setVariety(e.target.value)}
              className={styles.select}
            >
              {varietyOptions.map((v) => (
                <option key={v.label} value={v.label}>
                  {v.label} ({v.urdu}) — {v.availability}
                </option>
              ))}
            </select>
            <p className={styles.hint}>
              Availability and price are seasonal — confirm on WhatsApp.
            </p>
          </div>
        </div>

        <div className="col-12 col-sm-6">
          <div className="d-grid gap-2">
            <label className={styles.label}>Quantity (kg)</label>
            <input
              type="number"
              min={10}
              step={1}
              value={kg}
              onChange={(e) => setKg(Number(e.target.value))}
              className={styles.input}
            />
            <p className={styles.hint}>Minimum 10 kg</p>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className={`btn ${styles.submitBtn}`}
      >
        Send on WhatsApp
      </button>
    </form>
  );
}
