import { useState } from "react";
import './PricingCard.scss';

const PRICING_TIERS = [
    { pageviews: '10k', price: 8 },
    { pageviews: '50K', price: 12 },
    { pageviews: '100K', price: 16 },
    { pageviews: '500K', price: 24 },
    { pageviews: '1M', price: 36 },
];

export default function PricingCard() {
    const [tierIndex, setTierIndex] = useState(2);
    const [isYearly, setIsYearly] = useState(false);
    const currentTier = PRICING_TIERS[tierIndex]
    const basePrice = currentTier.price;
    const finalPrice = isYearly ? basePrice * 0.75 : basePrice;
    const sliderProgress = (tierIndex / (PRICING_TIERS.length - 1)) * 100;

    return (
        <div className="pricing-card">
            <div className="pricing-card__header">
                <span className="pricing-card__pageviews">
                    {currentTier.pageviews} PAGEVIEWS
                </span>
            </div>
            <div className="pricing-card__price-box">
                <span key={finalPrice} className="pricing-card__price">
                    ${finalPrice.toFixed(2)}
                </span>
                <span className="pricing-card__period">/ month</span>
            </div>
            <div className="pricing-card__slider-container">
                <input
                    type="range"
                    min="0"
                    max={PRICING_TIERS.length - 1}
                    value={tierIndex}
                    onChange={(e) => setTierIndex(Number(e.target.value))}
                    className="custom-slider"
                    style={{ '--progress': `${sliderProgress}%` }}
                />
            </div>
            <div className="pricing-card__billing">
                <span className="pricing-card__billing-label">Monthly Billing</span>
                <label className="pricing-card__switch">
                    <input type="checkbox"
                        checked={isYearly}
                        onChange={(e) => setIsYearly(e.target.checked)}
                    />
                    <span className="pricing-card__switch-slider"></span>
                </label>
                <span className="pricing-card__billing-label">Yearly Billing
                    <span className="pricing-card__badge">25% </span>
                </span>
            </div>
            <hr className="pricing-card__divider" />
            <div className="pricing-card__footer">
                <ul className="pricing-card__features">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                            <path fill="none" stroke="#10B981" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1" />
                        </svg>
                        Unlimited websites
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                            <path fill="none" stroke="#10B981" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1" />
                        </svg>
                        100% data ownership
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                            <path fill="none" stroke="#10B981" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1" />
                        </svg>
                        Email support
                    </li>
                </ul>
                <button className="pricing-card__cta">Start my trial</button>
            </div>
        </div>
    )
}