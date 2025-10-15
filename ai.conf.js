export const ai_conf = { 
  
    api_key: 'vjN0mhZfFbJeTuxnku6AANtVNFU319Sf',
    ai_server: 'https://api.mistral.ai/v1/chat/completions',
    model: 'mistral-tiny',
  
    results_dir: 'test-results/',
    report_dir: 'playwright-report',
    ai_responses_dir: 'ai-responses',
  
    max_prompt_length: 2000, 
    request_delay: 20000,
    stream: true,
    parallel_enabled: true,
    parallel_limit: 4,
    
    error_file_patterns: [
      'copy-prompt.txt',
      '**/error-context.md',
      '*-attachment.md',
      'error.txt',
      'test-error.md',
      '*-error.txt',
      '*-error.md',
      '*-result.json'
    ],
  
    save_ai_responses: true,
    ai_responses_dir: 'test-results',
    ai_responses_filename_template: 'ai-response-{timestamp}-{index}.md',
    include_metadata: true,
  
    allure_integration: true,
    allure_results_dir: 'allure-results',
  
    summary_report: true,
    summary_report_formats: ['html', 'markdown', 'json'],
  };