// "use client";

// import { useState } from "react";
// import { Input } from "@/app/components/ui/input";
// import { Textarea } from "@/app/components/ui/textarea";
// import { Label } from "@/app/components/ui/label";
// import { Button } from "@/app/components/ui/button";
// import { Checkbox } from "@/app/components/ui/checkbox";
// import { Card } from "@/app/components/ui/card";

// export const ContactSection = () => {
//   const [agreed, setAgreed] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     preferredTime: "",
//     preferredMethod: "",
//   });

//   const handleChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!agreed) return;

//     setSubmitted(true);

//     setTimeout(() => {
//       setSubmitted(false);
//     }, 4000); // Hide message after 4 sec

//     // Reset form
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       message: "",
//       preferredTime: "",
//       preferredMethod: "",
//     });
//     setAgreed(false);
//   };

//   return (
//     <section
//       id="contact"
//       className="min-h-screen py-16 bg-[#f4f7f6] flex items-center justify-center px-4"
//     >
//       <Card className="max-w-xl w-full border border-[#43705e] p-8 shadow-xl bg-white">
//         <h2 className="text-2xl sm:text-3xl font-serif text-[#2c4c3c] font-semibold text-center mb-4">
//           Get In Touch
//         </h2>
//         <p className="text-center text-sm text-gray-700 mb-8">
//           Simply fill out the brief fields below and Dr. Norman will be in touch with you soon,
//           usually within one business day. This form is safe, private, and completely free.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-5 text-sm">
//           <div>
//             <Label htmlFor="name">Name</Label>
//             <Input
//               id="name"
//               value={formData.name}
//               onChange={(e) => handleChange("name", e.target.value)}
//               placeholder="Name"
//               className="border border-[#43705e] text-black"
//               required
//             />
//           </div>
//           <div>
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               value={formData.email}
//               onChange={(e) => handleChange("email", e.target.value)}
//               placeholder="you@example.com"
//               className="border border-[#43705e] text-black"
//               required
//             />
//           </div>
//           <div>
//             <Label htmlFor="phone">Phone</Label>
//             <Input
//               id="phone"
//               value={formData.phone}
//               onChange={(e) => handleChange("phone", e.target.value)}
//               placeholder="(555) 234-5678"
//               className="border border-[#43705e] text-black"
//               required
//             />
//           </div>
//           <div>
//             <Label htmlFor="message">Message</Label>
//             <Textarea
//               id="message"
//               value={formData.message}
//               onChange={(e) => handleChange("message", e.target.value)}
//               placeholder="How can I help you?"
//               className="border border-[#43705e] text-black"
//               required
//             />
//           </div>
//           <div>
//             <Label htmlFor="preferredTime">Preferred Contact Time</Label>
//             <Input
//               id="preferredTime"
//               value={formData.preferredTime}
//               onChange={(e) => handleChange("preferredTime", e.target.value)}
//               placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
//               className="border border-[#43705e] text-black"
//               required
//             />
//             <p className="text-xs text-gray-600 mt-1">
//               Let us know when you're typically available for a call or consultation
//             </p>
//           </div>
//           <div>
//             <Label htmlFor="preferredMethod">Preferred Contact Method</Label>
//             <select
//               id="preferredMethod"
//               value={formData.preferredMethod}
//               onChange={(e) => handleChange("preferredMethod", e.target.value)}
//               className="w-full border border-[#43705e] rounded-md py-2 px-3 text-black bg-white"
//               required
//             >
//               <option value="">Select preferred method</option>
//               <option value="phone">Phone</option>
//               <option value="email">Email</option>
//               <option value="text">Text</option>
//             </select>
//           </div>

//           <div className="flex items-center space-x-2 mt-4">
//             <Checkbox
//               id="agreed"
//               checked={agreed}
//               onCheckedChange={(checked) => setAgreed(!!checked)}
//               className="border border-[#43705e] data-[state=checked]:bg-[#43705e] data-[state=checked]:text-black"
//             />
//             <Label htmlFor="agreed" className="text-black">I'm not a robot</Label>
//           </div>

//           <Button
//             type="submit"
//             disabled={!agreed}
//             className="w-full bg-[#1b3b2a] hover:bg-[#26593f] text-white font-medium py-3 rounded-md transition-all"
//           >
//             Submit
//           </Button>

//           {submitted && (
//             <p className="text-center text-green-600 font-medium text-sm">
//               ✅ Thank you! I’ll get back to you within 24 hours.
//             </p>
//           )}

//           <p className="text-xs text-center text-gray-600 mt-4">
//             © By clicking submit you consent to receive texts and emails from Dr. Marcia T. Norman
//           </p>
//         </form>
//       </Card>
//     </section>
//   );
// };


"use client";

import { useState } from "react";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Card } from "@/app/components/ui/card";

export const ContactSection = () => {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredTime: "",
    preferredMethod: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;

    setSubmitted(true);

    // Optionally: Send to API here

    // Reset form values
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      preferredTime: "",
      preferredMethod: "",
    });
    setAgreed(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-16 bg-[#f4f7f6] flex items-center justify-center px-4"
    >
      <Card className="max-w-xl w-full border border-[#43705e] p-8 shadow-xl bg-white text-black">
        {!submitted ? (
          <>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#2c4c3c] font-semibold text-center mb-4">
              Get In Touch
            </h2>
            <p className="text-center text-sm text-gray-700 mb-8">
              Simply fill out the brief fields below and Dr. Norman will be in touch with you soon,
              usually within one business day. This form is safe, private, and completely free.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 text-sm">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Name"
                  className="border border-[#43705e] text-black"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="you@example.com"
                  className="border border-[#43705e] text-black"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="(555) 234-5678"
                  className="border border-[#43705e] text-black"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="How can I help you?"
                  className="border border-[#43705e] text-black"
                  required
                />
              </div>
              <div>
                <Label htmlFor="preferredTime">Preferred Contact Time</Label>
                <Input
                  id="preferredTime"
                  value={formData.preferredTime}
                  onChange={(e) => handleChange("preferredTime", e.target.value)}
                  placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                  className="border border-[#43705e] text-black"
                  required
                />
                <p className="text-xs text-gray-600 mt-1">
                  Let us know when you're typically available for a call or consultation
                </p>
              </div>
              <div>
                <Label htmlFor="preferredMethod">Preferred Contact Method</Label>
                <select
                  id="preferredMethod"
                  value={formData.preferredMethod}
                  onChange={(e) => handleChange("preferredMethod", e.target.value)}
                  className="w-full border border-[#43705e] rounded-md py-2 px-3 text-black bg-white"
                  required
                >
                  <option value="">Select preferred method</option>
                  <option value="phone">Phone</option>
                  <option value="email">Email</option>
                  <option value="text">Text</option>
                </select>
              </div>

              <div className="flex items-center space-x-2 mt-4">
                <Checkbox
                  id="agreed"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(!!checked)}
                  className="border border-[#43705e] data-[state=checked]:bg-[#43705e] data-[state=checked]:text-white"
                />
                <Label htmlFor="agreed" className="text-black">
                  I'm not a robot
                </Label>
              </div>

              <Button
                type="submit"
                disabled={!agreed}
                className="w-full bg-[#1b3b2a] hover:bg-[#26593f] text-white font-medium py-3 rounded-md transition-all"
              >
                Submit
              </Button>

              <p className="text-xs text-center text-gray-600 mt-4">
                © By clicking submit you consent to receive texts and emails from Dr. Marcia T. Norman
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl sm:text-3xl font-serif text-[#43705e] font-semibold mb-4">
              Thank You!
            </h3>
            <p className="text-gray-700 text-base">
              I’ll get back to you within 24 hours.
            </p>
          </div>
        )}
      </Card>
    </section>
  );
};
