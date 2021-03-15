const jobSourceResolver = (jobOpportunity, jobBoards) => {
  let source = '';
  if (jobOpportunity.jobURL.includes(jobOpportunity.companyName.toLowerCase())) {
    jobBoards.forEach(job => {
      if (jobOpportunity.jobURL.includes(job.name.toLowerCase()) || jobOpportunity.jobURL.includes(job.root_domain)) {
        source = job.name;
        return;
      }
    });
    return source == '' ? 'Company Website' : source;
  }
  source = '';
  jobBoards.forEach(job => {
    if (jobOpportunity.jobURL.includes(job.name.toLowerCase()) || jobOpportunity.jobURL.includes(job.root_domain)) {
      source = job.name;
      return;
    }
  });
  return source == '' ? 'Unknown' : source;
};

exports.jobSourceResolver = jobSourceResolver;
