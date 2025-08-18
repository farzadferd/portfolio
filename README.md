# Farzad's AI Portfolio  

Ask a question — my AI avatar replies instantly. NOTE: DID NOT CREATE THE FRONT END PAGE MYSELF (IT IS A TEMPLATE).

## 🚀 How to run

### Prerequisites
- **Node.js** (v18 or higher)
- **pnpm** package manager
- **OpenAI API token** (for AI chat functionality)
- **GitHub token** (for GitHub integration features)

### Setup
1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment variables**
   Create a `.env` file in the root directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   GITHUB_TOKEN=your_github_token_here
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Getting your **tokens**
- **OpenAI API Key**: Get it from [platform.openai.com](https://platform.openai.com/api-keys)
- **GitHub Token**: Generate one at [github.com/settings/tokens](https://github.com/settings/personal-access-tokens) with repo access