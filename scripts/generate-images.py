import os
import sys
from google import genai
from google.genai import types
import base64

client = genai.Client(api_key=os.environ.get("NANO_BANANA_API_KEY", "AIzaSyDZ0Z0tozwc0PuGD14uFN3WJF6Z8_xgxmw"))

# Use Gemini 2.0 Flash (free tier with image generation)
MODEL = "gemini-2.0-flash-exp-image-generation"

prompts = {
    "hero-abstract": "A dramatic dark abstract tech visualization. Deep navy and black background with flowing luminescent green energy lines (hex #3fb950) creating an elegant network pattern. Subtle particle effects and geometric nodes connected by light trails. Premium, cinematic, ultra-modern. No text, no people. 16:9 aspect ratio. High contrast, moody lighting.",
    
    "legal-industry": "A sophisticated dark-toned photograph of a modern law firm office at night. Sleek glass desk with a laptop showing glowing green data visualizations. Minimal, premium aesthetic. Dark background with subtle warm accent lighting. No people visible. Clean, architectural. Shot from slight angle.",
    
    "recruiting-industry": "A stylized dark photograph of a modern recruiting workspace. Multiple floating holographic candidate profiles with green accent highlights against a dark background. Abstract, futuristic but grounded. Premium tech aesthetic. No real faces. Moody cinematic lighting.",
    
    "workflow-pattern": "Abstract dark geometric pattern. Interconnected hexagonal grid flowing from left to right, transitioning from dim gray to bright green (#3fb950). Represents workflow optimization. Clean, minimal, premium. Dark charcoal background. No text.",
    
    "consulting-process": "An elegant dark abstract visualization of a 4-step process flow. Four glowing green nodes connected by luminous curved lines against a deep dark background. Each node has a subtle pulsing glow. Premium, modern, high-tech aesthetic. No text, no people.",
}

output_dir = "public/images"

for name, prompt in prompts.items():
    print(f"Generating: {name}...")
    try:
        response = client.models.generate_content(
            model=MODEL,
            contents=prompt,
            config=types.GenerateContentConfig(
                response_modalities=["TEXT", "IMAGE"],
            ),
        )
        
        for part in response.candidates[0].content.parts:
            if part.inline_data is not None:
                img_data = part.inline_data.data
                ext = "png" if "png" in (part.inline_data.mime_type or "") else "jpg"
                filepath = f"{output_dir}/{name}.{ext}"
                
                # inline_data.data might be base64 string or bytes
                if isinstance(img_data, str):
                    img_bytes = base64.b64decode(img_data)
                else:
                    img_bytes = img_data
                    
                with open(filepath, "wb") as f:
                    f.write(img_bytes)
                print(f"  ✓ Saved: {filepath} ({len(img_bytes)} bytes)")
                break
        else:
            print(f"  ✗ No image in response for {name}")
            # Print text parts for debugging
            for part in response.candidates[0].content.parts:
                if part.text:
                    print(f"    Text: {part.text[:200]}")
    except Exception as e:
        print(f"  ✗ Error: {e}")

print("\nDone!")
